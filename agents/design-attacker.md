# design-attacker

**Stage:** 2 - Design workshop (after the design note is drafted)
**Status:** idea

## Purpose
Looks at the design as an attacker would, to find how it could be attacked before anything is built. It covers two kinds of attack: **technical** attacks on the architecture, and **social** attacks on the people and processes around it. It is independent of the squad and of the agent that drafted the design.

## How it differs from the challenger
- The **challenger** works with the squad during the workshop. It questions the story map, the assumptions and the decisions.
- The **design-attacker** works on the finished design note, with an adversary's mindset. Its question is not "what is missing?" but "how would I break this, or abuse it?"

## The two kinds of attack

**Technical.** Weaknesses in how the design is built.
- Interfaces and trust boundaries that can be abused
- Data that is exposed, or kept longer than needed
- Components with more access than they need
- Load or cost that can be turned into an outage, including at the scale in the brief
- Dependencies, and the risk that comes with anything bought or borrowed
- Failure and recovery paths that leave the system open

**Social.** Weaknesses in how people and processes behave.
- Someone impersonating a customer or a colleague to a support desk or an approver
- Staff being tricked, pressured or rushed into an exception
- Misuse by someone with legitimate access
- The human review or challenge route, such as the one for an automated decision, being used by a fraudster to get a wrongly refused customer through
- Account recovery used as a way in
- Customers gaming the system's own rules, or feeding it inputs designed to fool an automated check

Many serious attacks combine both: a social trick that opens a technical door.

## Inputs
- The design note
- The opportunity brief, especially the scale, the unhappy paths and the constraints
- The context sheet, so it knows what already exists
- **Existing safeguards (optional).** A short, current list of the safeguards the organisation really has in place. See [safeguards and risk levels](#safeguards-and-risk-levels). If there is no list, the agent states its assumptions instead.

**Not:** the workshop discussion or the squad's reasoning. Seeing it would anchor the attacker on the squad's view, as with the stage 5 reviewer. It should be a different model from the one that drafted the design note, because a model tends to share blind spots with its own output.

## Safeguards and risk levels

A safeguard is something that already prevents or catches an attack: identity checks before a support agent changes an account, approval for large refunds, two-factor sign-in, limits on who can see data, activity logs, alerts, staff training.

**A baseline plus higher levels.** Every organisation needs a baseline of safeguards that applies to everything it builds. Some opportunities need more than the baseline, and how much depends on what is at stake. For example, personal data and payment card details need different levels of protection, and payment card data usually has industry rules of its own. The organisation's security and compliance people set the levels and the rules. This framework does not.

**How the agent uses them**
- It reads the opportunity brief to see what kind of data and risk is involved, and which countries and laws apply, and judges the design against the level that applies.
- It treats a safeguard as something to test, not something to trust. For each one it asks how it could be bypassed, tricked or worn down, and what happens when it fails.
- It reports where the design needs a higher level than the baseline and does not have it.

**Who owns the list.** Someone owns it and keeps it current, as with any context agents rely on. It describes real weaknesses and defences, so it belongs in the organisation's own private systems and never in a public repository.

## Outputs
A ranked list of attack scenarios, at most ten. Each has:
- who the attacker is and what they want
- the steps, in plain terms
- the weakness in the design it relies on, with the section of the design note cited
- the likely impact, and how likely or how hard it is
- what the squad could look at to reduce it, as questions or options, not a required fix

## Human gate
The squad decides which scenarios to act on, and records each decision in the design note: accept the risk, reduce it, or investigate further. For high-impact scenarios, the squad can bring in a security specialist where the organisation has one.

## Scope and safeguards
- **Analysis only.** It works from the design document and does not probe any live system.
- **No working attack tools.** It describes attacks at the level needed to judge and fix the design, and does not produce exploit code or step-by-step operational instructions.
- **Only systems the organisation owns,** and only the design in front of it.

## Draft prompt
```
You are an adversary reviewing a software design before it is built, so that its weaknesses can be fixed. Work only from the design note, the opportunity brief and the context sheet.

Find ways the design could be attacked, of two kinds:
- technical attacks on the architecture
- social attacks on the people and processes around it, including attacks that use the human review or challenge routes, and attacks that combine social and technical steps

For each scenario give: who the attacker is and what they want; the steps in plain terms; the weakness in the design it relies on, citing the section; the likely impact; how likely or how hard it is; and what the squad could look at to reduce it.
Rank by risk. Give at most ten. Drop any scenario you cannot tie to a specific part of the design.
If a list of existing safeguards is provided, use it. Judge the design against the level of protection that the kind of data and risk in the brief calls for, which may be higher than the baseline. Treat each safeguard as something to test: ask how it could be bypassed, tricked or worn down. If no list is provided, state your assumptions about what safeguards exist.
Do not produce working exploit code or operational attack instructions.
```

## Failure modes
- **Generic threat lists** that fit any system. Requiring a cited section of the design is the main filter.
- **Unrealistic attacks** that no real attacker would bother with, which wastes the squad's time.
- **Over-ranking** everything as critical, so nothing stands out.
- **Missing the social side,** because technical attacks are easier to describe. The prompt asks for both kinds.
- **Guessing about safeguards** it cannot see. It states its assumptions so the squad can correct them, and the optional list removes the guesswork.
- **Trusting the list.** An attacker does not assume a safeguard works. The agent must test each one.
- **A stale list,** which is worse than none. Someone must own it.
- **Applying the baseline to everything,** so high-risk opportunities are judged too leniently. The kind of data in the brief sets the level.

## Metrics
- Scenarios the squad acted on, against scenarios dismissed
- Weaknesses found later in build, testing or penetration testing that this review should have caught
- Time spent per design, against the weaknesses found
