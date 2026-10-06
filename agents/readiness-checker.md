# readiness-checker

**Stage:** 3 - Stories and sizing (the final gate, before build)
**Status:** idea

## Purpose
Checks that every story is ready to move to build. A story is ready when it has been estimated and has its acceptance criteria defined. No story moves to build until it passes.

This check is about completeness, not quality. The squad's own acceptance at the end of the refinement session is what judges whether the stories are good.

## Inputs
The stories after the squad's refinement and estimation session, with their estimates and acceptance criteria.

## Outputs
For each story: ready, or not ready, with exactly what is missing. A story that is not ready stays in refinement. The agent also gives a short summary: how many stories passed, and which did not. Where it has access to the squad's tracking tool, it also moves each story to the matching state.

## Moving stories to the right state
The agent can also move the stories into the right state in the tool the squad tracks its work in, such as Jira or Linear.
- A story that passes moves to the "ready for build" state.
- A story that fails stays in, or goes back to, the refinement state, with a comment saying exactly what is missing.

This is what makes the gate real: a story cannot reach build just by being dragged across a board.

**Safeguards.** The agent changes only the state and adds its comment. It never edits a story's content, estimate or acceptance criteria. Every change it makes is recorded. Which tool, and which states mean "ready" and "refinement", come from the organisation's tool configuration, so the framework itself stays tool-neutral.

## The checks
1. **Estimated.** The squad has estimated the story, and the story fits into a single development iteration.
2. **Acceptance criteria defined.** The story has acceptance criteria, they are real statements of behaviour and not placeholders such as "works as expected", and the test author has confirmed they can be tested.

A squad can add its own checks, such as a trace to the story map.

## Human gate
Only a person can waive a failed check, and the waiver is recorded with the reason. The agent blocks, and the accountable person decides whether to override. Waivers are counted, so a pattern of them shows up.

## Draft prompt
```
Check whether each story is ready to move to build. A story is ready only if:
- it has an estimate agreed by the squad, and it fits within one development iteration
- it has acceptance criteria defined as observable behaviour, not placeholders, and the test author has confirmed they can be tested

For each story say ready or not ready. For each story that is not ready, say exactly what is missing. Do not judge whether the story is a good one, only whether it is complete.
Finish with a one-line summary: how many passed, and which did not.
```

## Failure modes
- **Checking that something exists, not that it means anything.** A filled-in field with a vague placeholder is not a pass. The prompt asks for real statements of behaviour.
- **Gaming it** by filling in fields to get through. The test author's confirmation and the squad's acceptance are the defence.
- **Becoming a bottleneck** if it is slow or noisy. It should be fast and quiet when the stories are good.

## Metrics
- Share of stories that fail on the first check. It should fall as the squad matures.
- Waivers granted, and why.
- Stories found in build to have missing or untestable criteria that this check passed.
