# AI SDLC

An open framework for running a software delivery lifecycle where AI agents do much of the drafting and humans own the judgment.

> **Status:** early draft. Structure and agent specs are being written in the open. Expect change.

## The idea

AI makes writing code cheap. The constraint moves to two places:

1. **Specifying what to build** - a clear problem, a shared design, testable acceptance criteria.
2. **Verifying what was built** - independent tests, adversarial review, safe release.

This framework rebalances the lifecycle around those two ends. It is not a coding-assistant rollout; it is a way of working.

## The lifecycle

| # | Stage | Human owns | Agents help with |
|---|---|---|---|
| 1 | [Problem brief](docs/stages/01-problem-brief.md) | Customer problem, outcomes, constraints | Stripping solution detail, finding gaps |
| 2 | [Design workshop](docs/stages/02-design-workshop.md) | The design, decisions, trade-offs | Context, scribing, challenge, stack checks |
| 3 | [Stories and sizing](docs/stages/03-stories-and-sizing.md) | Scope and priority | Story writing, acceptance criteria, size checks |
| 4 | [Build](docs/stages/04-build.md) | The pull request | Implementation |
| 5 | [Verification](docs/stages/05-verification.md) | Merge decision | Independent tests, adversarial review |
| 6 | [Release](docs/stages/06-release.md) | Go / rollback decisions | Plan summaries, post-deploy checks |

Acceptance criteria written at stage 3 are the thread: the test author, the reviewer and the release verifier all read them.

## Repository layout

- [`docs/`](docs/) - principles, lifecycle, one page per stage, adoption and metrics
- [`agents/`](agents/) - one spec per agent: purpose, inputs, outputs, human gate, draft prompt, failure modes
- [`templates/`](templates/) - artefacts the process produces, such as the problem brief

## Principles

Read [docs/principles.md](docs/principles.md) first. In short: humans stay accountable at defined gates; the author never is the only tester; specs are the primary artefact; measure before and after.

## Contributing

Agent specs are deliberately tool-agnostic. If you adapt one to a specific tool, add it under the agent's folder rather than changing the generic spec.
