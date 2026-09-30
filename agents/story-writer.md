# story-writer

**Stage:** 3 - Stories and sizing
**Status:** in use (internal version); this spec generalises it

## Purpose
Builds initiatives, epics and stories from the story map and design note, each with testable acceptance criteria.

## Inputs
Story map, design note, problem brief.

## Outputs
A roadmap: initiatives, epics, stories. Each story has a trace to a map step and acceptance criteria written as observable behaviour.

## Human gate
Product confirms scope and priority; engineering accepts breakdown and size.

## Draft prompt
```
Create a roadmap from the story map and design note. Do not work from the brief alone.
Every story must reference the map step it comes from.
Write acceptance criteria as observable behaviour (given / when / then) that a test could check. Do not describe implementation.
Keep each story small enough for one reviewable pull request. If it is not, split it.
List anything you cannot specify as an open question.
```

## Failure modes
- Acceptance criteria that restate the implementation.
- Stories without a trace, which drift from the design.

## Metrics
Stories accepted without rewriting; escaped defects traced to weak criteria.
