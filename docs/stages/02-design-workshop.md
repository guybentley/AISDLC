# Stage 2: Design workshop

- **Human owner:** The squad (product, engineering, platform and any other relevant party)
- **Facilitator:** The product manager
- **Agents:** [workshop-context-pack](../../agents/workshop-context-pack.md), [workshop-scribe](../../agents/workshop-scribe.md), [workshop-challenger](../../agents/workshop-challenger.md), [design-note-writer](../../agents/design-note-writer.md), [design-attacker](../../agents/design-attacker.md)
- **Output:** a story map and a design note committed to the repository, including how success will be measured

## Purpose

Design the solution live, with product, platform and software in the room, using story mapping. Doing this before stories are written means the stories come from a shared design instead of a document.

## Format

The workshop starts from the basic [story map](../../templates/story-map.md) of the customer need prepared in [stage 1](01-opportunity-brief.md).

The product manager facilitates, and the whole squad does the work.

1. **Backbone:** the product manager walks the squad through the prepared customer journey, step by step, in plain language. The squad challenges it and changes it where it is wrong.
2. **Ribs:** what the customer does or needs at each step, including the stories for the points where things go wrong.
3. **Slice:** draw the line for the smallest possible end-to-end version that delivers value, then later slices. Small iterations make delivery predictable and speed the flow to production.
4. **Annotate:** for each step in the first slice, mark what exists, what is new, what is risky and what is unknown. Check the design against the scale in the brief and against the level of safeguards that the kind of data involved, and the countries and laws that apply, call for, and ask what could go wrong if someone tried to misuse it.
5. **Agree how success will be measured:** for each slice, agree what will show that it has worked, using the measure and target from the brief. Make sure the design can capture what is needed to measure it, including a baseline where none exists, for example by measuring the first release. The detail of how each measure is taken, and the acceptance criteria that check it, is written in [stage 3](03-stories-and-sizing.md).
6. **Decide:** record design decisions, reasons and open questions.

## Build, buy or deviate

The existing stack is a starting point, not a rule. Engineering may recommend deviating from it, or buying a ready-made product, when that is the best way to meet the need: the most efficient, the lowest long-term cost, or the quickest.

This is a decision for the whole squad. Product brings the commercial view of its area, including the profit and loss. Engineering brings feasibility and the cost to build and run. The squad weighs them together and records the decision and the reasons.

## Where agents help

**Before:** the context pack agent reads the brief and the repositories and produces a one-page sheet of relevant existing services, constraints and open questions. It is not a design. It is only as good as the context it reads, so that context needs an owner who keeps it current.

**During:** three separate jobs.
- *Scribe:* captures the map, decisions and open questions as structured text.
- *Challenger:* asked "what breaks, what is missing, what did we assume?" against the current map. This is the independent check on the design.
- *Stack checker:* asked how a proposed approach compares with what exists, and what it would cost to deviate from it.

Keep agent output off the shared screen during steps 1 to 3. A model-drafted journey shown early anchors the room and stops people thinking about the customer. Ask for options only after the opportunity is agreed, and only when asked.

**After:** the design-note writer produces a short design note in the repository. The design-attacker then looks at it as an attacker would, covering technical attacks on the architecture and social attacks on the people and processes around it. The squad reviews the note and the findings, and records what it decides to do about each.

## Human gate

The squad accepts the design note, after the independent reviews by the challenger and the design-attacker. The squad also confirms that the design still delivers the opportunity in the brief.

## Anti-patterns

- Agent output shown before the journey is agreed
- The design is settled before the squad has met
- Design decisions made but not recorded
