# adversarial-reviewer

**Stage:** 5 - Verification
**Status:** idea

## Purpose
Reviews a pull request to find how it fails. It should be a different model family from the one that wrote the code, since a model shares blind spots with its own output.

## Inputs
The spec, the acceptance criteria and the diff. **Not** the author's summary or reasoning.

## Outputs
Findings, each with a location, the problem, and a concrete failure scenario (inputs or state leading to a wrong result). The author answers each: fixed, or rebutted with evidence.

## Human gate
The human reviewer decides on merge and settles any unresolved disagreement after one or two rounds. AI approval does not count toward required approvals.

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
