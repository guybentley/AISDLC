# security-agent

**Stage:** 4 - Build (alongside the coding agent)
**Status:** idea

## Purpose
Reviews the code as the coding agent or the engineer is building it. It informs them and helps steer them toward the right choices, so weaknesses are avoided while the code is being written, which is when they are cheapest to fix. It works next to the coding agent, as a separate agent, and it is part of making security a continuous check and not something left to the end.

It works with whoever is writing. When the agent writes, it steers the coding agent and informs the engineer. When the engineer writes, which is about one story in every three or four, it steers the engineer directly.

## Inputs
- The change being built (the code, and the story it implements)
- The design note, including the findings the squad accepted from the design-attacker
- The opportunity brief, especially the kinds of sensitive data involved and the countries and laws that apply
- Optionally, the list of the organisation's existing safeguards (see the [design-attacker](design-attacker.md))

It should be a different session from the coding agent, and ideally a different model, so it does not share the coding agent's blind spots.

## What it looks for
- Secrets or credentials committed in code
- Dependencies that are out of date, untrusted or known to be vulnerable
- Unsafe handling of input, and data that is exposed or kept longer than needed
- Mistakes in access and permissions
- Sensitive data written to logs
- Places where the change departs from the safeguards the design relies on, or from the level of protection that the data and the countries involved call for

## Outputs
Short, timely guidance during the build, aimed at the coding agent and the engineer. Each piece has the location, what the concern is, why it matters, and a suggested better choice. It ranks them, with the serious ones first, so the person or agent writing can act on them straight away.

## Human gate
The agent informs and steers. It does not block. The engineer decides what to do with each piece of guidance. Deterministic checks, such as secret and dependency scanners, block a change. The agent's guidance does not block on its own.

## Scope and safeguards
- It reads the code in the repository. It does not probe any running system. Testing a running system belongs to the continuous security testing at later stages.
- It never changes the code itself. It reports, and the engineer and the coding agent act.
- It works only inside the organisation's own systems.

## Draft prompt
```
You review code for security weaknesses as it is being written, and you help steer whoever is writing it, an agent or an engineer, toward the right choices. Work from the change so far, the story, the design note and the opportunity brief. Give short guidance as you go, so problems are avoided before they are committed.

Look for: committed secrets, vulnerable or untrusted dependencies, unsafe handling of input and data, access and permission mistakes, sensitive data in logs, and departures from the safeguards the design relies on or from the level of protection the data and the countries involved call for.

For each piece of guidance give: the location, what the concern is, why it matters, and a better choice. Rank by seriousness. Advise and steer; do not block, and do not change any code. If you are unsure, say so instead of guessing.
```

## Failure modes
- **Noise,** with many low-value findings that people learn to ignore.
- **Missing logic flaws,** because patterns are easier to spot than flawed reasoning. The design-attacker and later testing cover those.
- **Relying on the scanners alone,** or on the agent alone. They find different things.
- **Sharing blind spots** with the coding agent if it is the same model and session.

## Metrics
- Findings the engineer acted on, against findings dismissed
- Weaknesses found later, at stage 5 or in production, that this agent should have caught
- Time added to a story by the review
