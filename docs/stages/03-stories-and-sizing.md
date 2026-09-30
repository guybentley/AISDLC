# Stage 3: Stories and sizing

**Human owners:** Product (scope, priority), Engineering (breakdown, sizing)
**Agents:** [story-writer](../../agents/story-writer.md), [right-size-checker](../../agents/right-size-checker.md)
**Output:** initiatives, epics and stories, each with testable acceptance criteria and a trace to the story map

## Purpose

Turn the story map and design note into a roadmap the team can build, without hand-writing tickets.

## Rules

- Every story traces to a step on the story map.
- Every story has acceptance criteria that can be turned into a test. This is the thread the rest of the lifecycle reads.
- Stories are small enough for one agent session and one reviewable pull request.

## Sizing

This framework favours **right-sizing** over story points: a story is either small enough to fit the team's agreed cycle-time target or it is split. Forecasting uses throughput (stories finished per period), not point velocity. Right-sizing pairs well with agent-driven work because a story that is small enough to right-size is also small enough to complete in one session.

The exact rule (target cycle time, how it is set, how splits are decided) should be defined by each team and documented here as the framework matures.

## Human gate

Engineering accepts the breakdown and the size. Product confirms scope and priority.

## Anti-patterns

- Acceptance criteria that describe implementation instead of behaviour
- Stories generated from the raw brief rather than the map and design note
- Sizing by point estimates that no one forecasts from
