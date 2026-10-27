# adversarial-reviewer

**Stage:** 4 - Build (the change is reviewed once it is ready, before the human review)
**Status:** idea

## Purpose
A second, separate agent that carries out an adversarial code review of the change, to find how it fails. Where the budget allows, it is a different model from the paired coding agent, since a model shares blind spots with its own output.

**Budget and fallback.** A different model is the aim. Where the budget does not allow it, use a separate session with a different brief, and accept that the independence is weaker.

**How it differs from the security agent.** The [security-agent](security-agent.md) steers while the code is being written. This agent looks at the finished change and tries to break it, across edge cases, error handling, concurrency, data integrity and requirements the change ignores, as well as security.

## Inputs
The story, the acceptance criteria and the change. **Not** the coding agent's summary or reasoning.

## Outputs
Findings, each with a location, the problem, and a concrete failure scenario (inputs or state leading to a wrong result). The engineer answers each: fixed, or rebutted with evidence.

## Human gate
The engineer answers the findings. The human reviewer settles any unresolved disagreement after one or two rounds, and decides on merge at stage 5. AI approval does not count toward required approvals.

## Draft prompt
```
You are an adversarial reviewer. Your job is to find how this change fails, not to confirm it looks reasonable.
Judge the diff against the spec and acceptance criteria only.
For every finding give: location, what is wrong, and a concrete failure scenario (inputs or state that produce a wrong result). Drop findings you cannot support with a scenario.
Look for: unhandled edge cases, security issues, concurrency, error handling, data integrity, and requirements the change ignores.
```

## Implementation notes
- GitHub Copilot code review can be triggered automatically and accepts repository instructions files, but its docs state the underlying model cannot be chosen. If a guaranteed different model matters, run a CI job that calls a named model with this prompt.

## Failure modes
- Noise. The scenario requirement is the main filter.
- Anchoring, if the author's summary leaks in.

## Metrics
Acceptance rate, noise rate, unique catches, escaped defects.
