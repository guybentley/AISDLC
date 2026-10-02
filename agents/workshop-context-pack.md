# workshop-context-pack

**Stage:** 2 - Design workshop (before)
**Status:** draft

## Purpose
Gives the workshop knowledge of what already exists, so the design starts from what is already there. It is a briefing, not a design. Whether to build on what exists, deviate from it or buy something ready-made is for the squad to decide.

## Inputs
The opportunity brief, read access to relevant repositories, infrastructure definitions and existing design notes or decision records.

## Outputs
A one-page sheet: relevant existing services and where they live, constraints that already apply, similar past work, and open questions the brief leaves.

## Human gate
An engineer checks it for errors before the workshop.

## Draft prompt
```
Read the opportunity brief and the repositories. Produce a one-page context sheet for a design workshop.
Include: existing services and components likely to be relevant (with paths), existing constraints (platform, security, data), similar past features, and questions the brief leaves open.
Do not propose a design or a solution. State when you are unsure, and cite files for every claim.
```

## Failure modes
- Presenting guesses as facts. Require file citations.
- Drifting into design proposals.

## Metrics
Engineer-rated usefulness; number of "we already have that" surprises during design.
