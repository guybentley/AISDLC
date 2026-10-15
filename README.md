# AI SDLC

An open framework for running a software delivery lifecycle as a partnership: engineers and AI agents work as a pair, agents bring speed, and engineers bring judgment and accountability.

> **Status:** early draft. Structure and agent specs are being written in the open. Expect change.

## The idea

AI enhances the speed of writing code. That moves the constraint to two places:

1. **Specifying what to build** - a clear customer opportunity, a shared design, testable acceptance criteria.
2. **Verifying what was built** - independent tests, adversarial review, safe release.

This framework rebalances the lifecycle around those two ends. It is not a coding-assistant rollout; it is a way of working, in which people and agents do each stage together and the accountable person decides.

## Scope

**What it covers.** How people and agents work together across a delivery lifecycle: the principles, six stages, the agents that help at each one, and the templates and metrics that go with them. It is about what changes when agents do much of the work.

**What it does not cover.** It does not teach story mapping, agile delivery, threat modelling or security testing. Where the framework relies on an established practice, it says in a line or two what the practice is for and points to a good source, and does not re-teach it.

**Where it is useful.** In the delivery of software, data, and AI products or projects.

**Tool-neutral.** Agent specs describe what an agent does, not which product runs it. Tools such as Jira, Linear or Miro appear only as examples.

## The lifecycle

| # | Stage | Human owns | Agents help with |
|---|---|---|---|
| 1 | [Opportunity brief](docs/stages/01-opportunity-brief.md) | Customer opportunity, outcomes, constraints | Stripping solution detail, finding gaps |
| 2 | [Design workshop](docs/stages/02-design-workshop.md) | The design, decisions, trade-offs | Context, scribing, challenge, stack checks |
| 3 | [Stories and sizing](docs/stages/03-stories-and-sizing.md) | Scope and priority | Story writing, acceptance criteria, size checks |
| 4 | [Build](docs/stages/04-build.md) | The pull request | Implementation |
| 5 | [Verification](docs/stages/05-verification.md) | Merge decision | Independent tests, adversarial review |
| 6 | [Release](docs/stages/06-release.md) | Go / rollback decisions | Plan summaries, post-deploy checks |

Acceptance criteria written at stage 3 are the thread: the test author, the reviewer and the release verifier all read them.

## Repository layout

- [`docs/`](docs/) - principles, lifecycle, one page per stage, adoption and metrics
- [`agents/`](agents/) - one spec per agent: purpose, inputs, outputs, human gate, draft prompt, failure modes
- [`templates/`](templates/) - artefacts the process produces, such as the opportunity brief

## Principles

Read [docs/principles.md](docs/principles.md) first. In short: people and agents work as a pair and swap roles; the opportunity, the design and the acceptance criteria come first; verification is independent from creation; people hold defined gates; a squad owns the solution; and context lives where agents can read it, with an owner.

## Contributing

Agent specs are deliberately tool-agnostic. If you adapt one to a specific tool, add it under the agent's folder rather than changing the generic spec.
