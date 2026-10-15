// Builds a single self-contained HTML page from the framework's Markdown files.
// No dependencies: run with `node tools/build-site.js [output file]` (default: docs/index.html).
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const OUT = path.resolve(ROOT, process.argv[2] || 'docs/index.html');

const groups = [
  { name: 'Overview', files: ['README.md', 'docs/principles.md', 'docs/lifecycle.md'] },
  { name: 'Stages', files: [
    'docs/stages/01-opportunity-brief.md', 'docs/stages/02-design-workshop.md',
    'docs/stages/03-stories-and-sizing.md', 'docs/stages/04-build.md',
    'docs/stages/05-verification.md', 'docs/stages/06-release.md'] },
  { name: 'Agents', files: [
    'agents/brief-coach.md', 'agents/backlog-watcher.md', 'agents/workshop-context-pack.md',
    'agents/workshop-scribe.md', 'agents/workshop-challenger.md', 'agents/design-note-writer.md',
    'agents/design-attacker.md', 'agents/story-writer.md', 'agents/right-size-checker.md',
    'agents/readiness-checker.md', 'agents/test-author.md', 'agents/adversarial-reviewer.md',
    'agents/release-verifier.md', 'agents/_template.md'] },
  { name: 'Running it', files: ['docs/adoption.md', 'docs/metrics.md'] },
  { name: 'Templates', files: ['templates/opportunity-brief.md', 'templates/story-map.md', 'templates/domain-context.md'] },
];

const idOf = (f) => (f === 'README.md' ? 'readme' : f.replace(/\.md$/, '').replace(/[\/_]/g, '-').replace(/^-+/, ''));
const allIds = new Set(groups.flatMap((g) => g.files.map(idOf)));
const dirTargets = { docs: 'docs-principles', agents: 'agents-brief-coach', templates: 'templates-opportunity-brief' };

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

// GitHub-style heading slug, so links like file.md#some-heading land on the right section.
const slugify = (s) => s
  .replace(/`/g, '').replace(/\*\*/g, '').replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
  .toLowerCase().replace(/[^a-z0-9 _-]/g, '').trim().replace(/ /g, '-');

function resolveLink(href, fromFile) {
  if (/^https?:|^mailto:/.test(href)) return { href, external: /^https?:/.test(href) };
  if (href.startsWith('#')) return { href: '#' + idOf(fromFile) + '--' + href.slice(1) };
  const frag = (href.match(/#(.*)$/) || [])[1];
  const clean = href.replace(/#.*$/, '');
  let target = path.posix.normalize(path.posix.join(path.posix.dirname(fromFile), clean));
  target = target.replace(/\/$/, '');
  if (dirTargets[target]) return { href: '#' + dirTargets[target] };
  if (target.endsWith('.md') && allIds.has(idOf(target))) return { href: '#' + idOf(target) + (frag ? '--' + frag : '') };
  return { href: '#', dead: true };
}

function inline(text, fromFile) {
  const codes = [];
  text = text.replace(/`([^`]+)`/g, (_, c) => { codes.push(c); return '\u0000' + (codes.length - 1) + '\u0000'; });
  text = esc(text);
  text = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, href) => {
    const r = resolveLink(href.replace(/&amp;/g, '&'), fromFile);
    const ext = r.external ? ' target="_blank" rel="noopener"' : '';
    return `<a href="${r.href}"${ext}>${label}</a>`;
  });
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  text = text.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, '$1<em>$2</em>');
  text = text.replace(/\u0000(\d+)\u0000/g, (_, i) => `<code>${esc(codes[+i])}</code>`);
  return text;
}

function render(md, fromFile) {
  const lines = md.replace(/\r\n/g, '\n').split('\n');
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (/^```/.test(line)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre><code>${esc(buf.join('\n'))}</code></pre>`);
      continue;
    }
    const h = line.match(/^(#{1,4})\s+(.*)$/);
    if (h) {
      const lvl = h[1].length;
      const idAttr = lvl > 1 ? ` id="${idOf(fromFile)}--${slugify(h[2])}"` : '';
      out.push(`<h${lvl}${idAttr}>${inline(h[2], fromFile)}</h${lvl}>`);
      i++;
      continue;
    }
    if (/^\s*$/.test(line)) { i++; continue; }
    if (/^>\s?/.test(line)) {
      const buf = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) buf.push(lines[i++].replace(/^>\s?/, ''));
      out.push(`<blockquote>${inline(buf.join(' '), fromFile)}</blockquote>`);
      continue;
    }
    if (/^\|/.test(line) && /^\|[\s:|-]+\|?\s*$/.test(lines[i + 1] || '')) {
      const cells = (l) => l.replace(/^\||\|\s*$/g, '').split('|').map((c) => c.trim());
      const head = cells(line);
      i += 2;
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) rows.push(cells(lines[i++]));
      out.push('<div class="tablewrap"><table><thead><tr>' + head.map((c) => `<th>${inline(c, fromFile)}</th>`).join('') +
        '</tr></thead><tbody>' + rows.map((r) => '<tr>' + r.map((c) => `<td>${inline(c, fromFile)}</td>`).join('') + '</tr>').join('') + '</tbody></table></div>');
      continue;
    }
    if (/^(\s*)[-*]\s+/.test(line) || /^\s*\d+\.\s+/.test(line)) {
      const ordered = /^\s*\d+\.\s+/.test(line);
      const re = ordered ? /^\s*\d+\.\s+(.*)$/ : /^\s*[-*]\s+(.*)$/;
      const items = [];
      while (i < lines.length && re.test(lines[i])) {
        let item = lines[i++].match(re)[1];
        while (i < lines.length && /^\s{2,}\S/.test(lines[i]) && !re.test(lines[i])) item += ' ' + lines[i++].trim();
        items.push(item);
      }
      const tag = ordered ? 'ol' : 'ul';
      out.push(`<${tag}>` + items.map((t) => `<li>${inline(t, fromFile)}</li>`).join('') + `</${tag}>`);
      continue;
    }
    // paragraph
    const buf = [];
    while (i < lines.length && !/^\s*$/.test(lines[i]) && !/^(#{1,4}\s|```|>|\||\s*[-*]\s+|\s*\d+\.\s+)/.test(lines[i])) buf.push(lines[i++]);
    if (!buf.length) { buf.push(lines[i++]); }
    out.push(`<p>${inline(buf.join(' '), fromFile)}</p>`);
  }
  return out.join('\n');
}

const sections = [];
const nav = [];
for (const g of groups) {
  const items = [];
  for (const f of g.files) {
    if (!fs.existsSync(path.join(ROOT, f))) continue;
    const md = fs.readFileSync(path.join(ROOT, f), 'utf8');
    const title = (md.match(/^#\s+(.*)$/m) || [null, f])[1];
    const id = idOf(f);
    items.push({ id, title: f === 'README.md' ? 'AI SDLC' : title.replace(/^Stage (\d): /, '$1. ') });
    sections.push(`<section class="doc" id="${id}" data-file="${f}">\n<p class="path">${f}</p>\n${render(md, f)}\n</section>`);
  }
  nav.push({ name: g.name, items });
}

const navHtml = nav.map((g) => `<div class="group"><h2>${g.name}</h2><ul>` +
  g.items.map((it) => `<li><a href="#${it.id}" data-nav="${it.id}">${esc(it.title)}</a></li>`).join('') + '</ul></div>').join('\n');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>AI SDLC Framework</title>
<meta name="description" content="An open framework for a software delivery lifecycle where AI agents draft and humans own the judgment.">
<style>
/* Layout: fixed-width reading column beside a sticky index; one document shown at a time. */
:root {
  --bg: #f7f8f9;
  --surface: #ffffff;
  --fg: #1c2226;
  --muted: #5a666e;
  --line: #dde2e6;
  --accent: #0b5f73;
  --accent-soft: #e2f1f4;
  --code-bg: #eef1f3;
  --sans: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --mono: ui-monospace, "Cascadia Code", "SF Mono", Menlo, Consolas, monospace;
  color-scheme: light;
}
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --bg: #12171a; --surface: #1a2125; --fg: #e4e9ec; --muted: #9aa8b0; --line: #2b353b;
    --accent: #6cc4d6; --accent-soft: #1b3038; --code-bg: #232c31; color-scheme: dark;
  }
}
:root[data-theme="dark"] {
  --bg: #12171a; --surface: #1a2125; --fg: #e4e9ec; --muted: #9aa8b0; --line: #2b353b;
  --accent: #6cc4d6; --accent-soft: #1b3038; --code-bg: #232c31; color-scheme: dark;
}
* { box-sizing: border-box; }
body { margin: 0; background: var(--bg); color: var(--fg); font-family: var(--sans); font-size: 16px; line-height: 1.6; }
a { color: var(--accent); }
a:focus-visible, button:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }

.shell { display: grid; grid-template-columns: 280px minmax(0, 1fr); min-height: 100vh; }
.index { position: sticky; top: 0; align-self: start; height: 100vh; overflow-y: auto; padding: 24px 20px; border-right: 1px solid var(--line); background: var(--surface); }
.brand { font-weight: 700; font-size: 1.05rem; margin: 0 0 4px; }
.tag { margin: 0 0 20px; color: var(--muted); font-size: .85rem; line-height: 1.4; }
.group h2 { margin: 18px 0 6px; font-size: .72rem; letter-spacing: .09em; text-transform: uppercase; color: var(--muted); font-weight: 600; }
.group ul { list-style: none; margin: 0; padding: 0; }
.group a { display: block; padding: 5px 10px; margin: 0 -10px; border-radius: 6px; color: var(--fg); text-decoration: none; font-size: .92rem; line-height: 1.35; }
.group a:hover { background: var(--accent-soft); }
.group a[aria-current="page"] { background: var(--accent-soft); color: var(--accent); font-weight: 600; }
.menu-btn { display: none; }

main { padding: 40px clamp(16px, 5vw, 64px) 72px; min-width: 0; }
.doc { max-width: 46rem; }
.js .doc { display: none; }
.js .doc.active { display: block; }
.path { font-family: var(--mono); font-size: .78rem; color: var(--muted); margin: 0 0 8px; }
h1 { font-size: 2rem; line-height: 1.2; margin: 0 0 20px; text-wrap: balance; }
h2 { font-size: 1.35rem; line-height: 1.3; margin: 2.2em 0 .6em; padding-top: .4em; border-top: 1px solid var(--line); text-wrap: balance; }
h3 { font-size: 1.1rem; margin: 1.8em 0 .5em; }
p, ul, ol { margin: 0 0 1em; }
ul, ol { padding-left: 1.4em; }
li { margin: .25em 0; }
li > ul, li > ol { margin-top: .25em; }
code { font-family: var(--mono); font-size: .88em; background: var(--code-bg); padding: .12em .35em; border-radius: 4px; }
pre { background: var(--code-bg); border: 1px solid var(--line); border-radius: 8px; padding: 14px 16px; overflow-x: auto; margin: 0 0 1.2em; }
pre code { background: none; padding: 0; font-size: .85rem; line-height: 1.5; }
blockquote { margin: 0 0 1em; padding: 10px 16px; background: var(--accent-soft); border-left: 3px solid var(--accent); border-radius: 0 6px 6px 0; }
.tablewrap { overflow-x: auto; margin: 0 0 1.2em; border: 1px solid var(--line); border-radius: 8px; background: var(--surface); }
table { border-collapse: collapse; width: 100%; font-size: .92rem; }
th, td { text-align: left; vertical-align: top; padding: 9px 12px; border-bottom: 1px solid var(--line); }
th { font-size: .78rem; letter-spacing: .04em; text-transform: uppercase; color: var(--muted); background: var(--bg); white-space: nowrap; }
tr:last-child td { border-bottom: 0; }
.pager { display: flex; justify-content: space-between; gap: 16px; margin-top: 3rem; padding-top: 1.2rem; border-top: 1px solid var(--line); max-width: 46rem; font-size: .92rem; }
.pager a { text-decoration: none; }
.pager .next { margin-left: auto; text-align: right; }
.foot { margin-top: 2rem; color: var(--muted); font-size: .8rem; max-width: 46rem; }

@media (max-width: 860px) {
  .shell { display: block; }
  .index { position: static; height: auto; border-right: 0; border-bottom: 1px solid var(--line); padding: 16px; }
  .menu-btn { display: inline-block; margin-top: 8px; padding: 8px 14px; font: inherit; font-size: .9rem; border: 1px solid var(--line); border-radius: 6px; background: var(--bg); color: var(--fg); cursor: pointer; }
  .js .index .groups { display: none; }
  .js .index.open .groups { display: block; }
  main { padding-block: 24px 56px; }
  h1 { font-size: 1.6rem; }
}
@media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
</style>
</head>
<body>
<div class="shell">
  <nav class="index" id="index" aria-label="Framework contents">
    <p class="brand">AI SDLC Framework</p>
    <p class="tag">Agents draft. Humans own the judgment.</p>
    <button class="menu-btn" id="menu" aria-expanded="false" aria-controls="groups">Contents</button>
    <div class="groups" id="groups">
${navHtml}
    </div>
  </nav>
  <main id="main">
${sections.join('\n')}
    <div class="pager" id="pager"></div>
    <p class="foot">Rendered from the Markdown files in the repository. Early draft.</p>
  </main>
</div>
<script>
(function () {
  document.documentElement.classList.add('js');
  var order = ${JSON.stringify(nav.flatMap((g) => g.items))};
  var docs = {};
  document.querySelectorAll('.doc').forEach(function (d) { docs[d.id] = d; });
  var links = document.querySelectorAll('[data-nav]');
  var indexEl = document.getElementById('index');
  var menu = document.getElementById('menu');
  var pager = document.getElementById('pager');

  function show(id, keepScroll) {
    if (!docs[id]) id = 'readme';
    Object.keys(docs).forEach(function (k) { docs[k].classList.toggle('active', k === id); });
    links.forEach(function (a) {
      if (a.getAttribute('data-nav') === id) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
    });
    var n = order.findIndex(function (o) { return o.id === id; });
    var prev = order[n - 1], next = order[n + 1];
    pager.innerHTML =
      (prev ? '<a class="prev" href="#' + prev.id + '">\\u2190 ' + prev.title + '</a>' : '') +
      (next ? '<a class="next" href="#' + next.id + '">' + next.title + ' \\u2192</a>' : '');
    document.title = (order[n] ? order[n].title + ' \\u00b7 ' : '') + 'AI SDLC Framework';
    indexEl.classList.remove('open');
    menu.setAttribute('aria-expanded', 'false');
    if (!keepScroll) window.scrollTo(0, 0);
  }
  function route() {
    var h = location.hash.replace(/^#/, '') || 'readme';
    var i = h.indexOf('--');
    var el = i > -1 ? document.getElementById(h) : null;
    show(i > -1 ? h.slice(0, i) : h, !!el);
    if (el) el.scrollIntoView({ behavior: 'auto' });
  }
  window.addEventListener('hashchange', route);
  // Handle in-page links directly, so they do not depend on the browser firing hashchange.
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    if (!a) return;
    var h = a.getAttribute('href').slice(1);
    e.preventDefault();
    if (location.hash.replace(/^#/, '') !== h) { location.hash = h; }
    route();
  });
  menu.addEventListener('click', function () {
    var open = indexEl.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  route();
})();
</script>
</body>
</html>
`;

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, html, 'utf8');
console.log('wrote', OUT, Math.round(html.length / 1024) + ' KB,', sections.length, 'sections');
