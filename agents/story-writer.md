# story-writer

**Stage:** 3 - Stories and sizing
**Status:** in use

## Purpose
Builds initiatives, epics and stories from the story map and design note, each with testable acceptance criteria.

## Inputs
Story map, design note, opportunity brief.

## Outputs
A roadmap: initiatives, epics, stories. Each story has a trace to a map step and acceptance criteria written as observable behaviour.

## How the pair works
The product manager and the agent write the epics and stories together, and either can lead. The product manager can direct the agent, or the agent can draft and the product manager can shape it. Every so often the product manager writes a set of stories unaided and the agent reviews them, so the skill stays sharp. The squad then refines and estimates the stories together in a single step.

## Human gate
Product accepts the stories, including scope, priority and acceptance criteria. Estimation and sizing belong to engineering; see the right-size-checker.

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
