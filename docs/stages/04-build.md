# Stage 4: Build

- **Human owner:** The engineer who owns the story
- **Agents:** a coding agent of your choice, the [security-agent](../../agents/security-agent.md), and the [adversarial-reviewer](../../agents/adversarial-reviewer.md)
- **Output:** a pull request that includes the code, its automated tests and integration tests, and the deployment plan and scripts

## Purpose

An engineer and a coding agent build a right-sized story together. This stage works at the level of the story: one engineer individually owns its construction, with the agent as their pair, and either can lead. A story enters build only after it passes the [readiness gate](03-stories-and-sizing.md#final-gate) at the end of stage 3.

## Swapping roles

Most of the time the agent does the writing, and the engineer directs it and reviews the result. About one story in every three or four, the engineer writes the story themselves and the agent acts as the reviewer. This keeps the engineer's skills sharp, and the agent records the squad's style in its context from what the engineer writes.

## Security alongside the build

A separate security agent reviews the code as the coding agent or the engineer is building it. It informs them and helps steer them toward the right choices, so weaknesses are avoided while the code is being written, which is when they are cheapest to fix. Security is checked throughout the flow and not left to the end. It advises and does not block: the engineer decides what to do with its guidance, and the automated scanners, such as those for secrets and vulnerable dependencies, block a change when they fail.

## Adversarial code review

A second, separate agent carries out an adversarial code review of the change. Its job is to find how the change fails, not to confirm that it looks reasonable. Where the budget allows, it is a different model from the paired coding agent, because a model tends to share blind spots with its own output.

- It sees the story, its acceptance criteria and the change. It does not see the coding agent's reasoning or summary, which would anchor it.
- Each finding comes with a concrete failure scenario: the inputs or state that lead to a wrong result. A finding without one is dropped.
- The engineer answers every finding: fixed, or rebutted with evidence. Disagreements go to a human after one or two rounds.
- The reviewer's approval does not count as a human approval.

This is different from the security agent. The security agent steers while the code is being written. The adversarial reviewer looks at the change once it is ready and tries to break it, across edge cases, error handling, concurrency, data integrity and requirements the change ignores, as well as security.

## Requirements

- **Repository context.** Each repository holds an agent instruction file, architecture decisions and conventions so the agent works from the same standards as the squad. Keep shared standards in one file that multiple tools can read.
- **Tests and deployment come with the code.** The coding agent or the engineer also builds the automated tests, the integration tests, and the deployment plan and scripts as part of the story, not afterwards. Independent acceptance tests are written separately at [stage 5](05-verification.md), and the deployment plan is what [stage 6](06-release.md) uses to release.
- **Small pull requests.** One story, one reviewable change.
- **The engineer owns the result.** "The agent wrote it" is never a defence.

## Human gate

The engineer opens the pull request only when they would be comfortable defending every line.

## Anti-patterns

- Large agent-generated pull requests nobody reads
- Each repository's agent instructions drift apart by accident, so the same standards are applied differently
- Relying only on tests written by whoever wrote the code, with no independent tests at stage 5
- Opening a pull request while the automated checks are failing
- Approving a change you cannot explain, including what it does and why
