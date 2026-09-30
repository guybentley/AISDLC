# Stage 2: Design workshop

**Human owners:** Product (problem), Platform and Software engineering (design)
**Agents:** [workshop-context-pack](../../agents/workshop-context-pack.md), [workshop-scribe](../../agents/workshop-scribe.md), [workshop-challenger](../../agents/workshop-challenger.md), [design-note-writer](../../agents/design-note-writer.md)
**Output:** a story map and a design note committed to the repository

## Purpose

Design the solution live, with product, platform and software in the room, using story mapping. Doing this before stories are written means the stories come from a shared design instead of a document.

## Format

The workshop starts from the empty [story map](../../templates/story-map.md) prepared in [stage 1](01-problem-brief.md).

1. **Backbone (Product leads):** walk the team through the prepared customer journey, step by step, in plain language. The team challenges it and changes it where it is wrong.
2. **Ribs:** what the customer does or needs at each step, including the stories for the points where things go wrong.
3. **Slice:** draw the line for the thinnest end-to-end version that delivers value, then later slices.
4. **Annotate (Platform and Software):** for each step in the first slice, mark what exists, what is new, what is risky and what is unknown.
5. **Decide:** record design decisions, reasons and open questions.

## Where agents help

**Before:** the context pack agent reads the brief and the repositories and produces a one-page sheet of relevant existing services, constraints and open questions. It is not a design.

**During:** three separate jobs.
- *Scribe:* captures the map, decisions and open questions as structured text.
- *Challenger:* asked "what breaks, what is missing, what did we assume?" against the current map.
- *Stack checker:* asked whether a proposed approach fits what exists.

Keep agent output off the shared screen during steps 1 to 3. A model-drafted journey shown early anchors the room and stops people thinking about the customer. Ask for options only after the problem is agreed, and only when asked.

**After:** the design-note writer produces a short design note in the repository. Engineering reviews it.

## Human gate

Engineering accepts the design note. Product confirms it still solves the problem in the brief.

## Anti-patterns

- Agent output shown before the journey is agreed
- Product arrives with a finished architecture
- Design decisions made but not recorded
