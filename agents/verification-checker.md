# verification-checker

**Stage:** 5 - Verification (the check before merge)
**Status:** idea

## Purpose
Makes sure everything needed is in place before the reviewing engineer decides on merge. It confirms that the earlier checks really happened: the unit tests, the adversarial review and the security review.

This check is about completeness, not quality. The reviewing engineer's code review and manual test are what judge whether the change is good. It is the stage 5 counterpart to the [readiness-checker](readiness-checker.md) at the end of stage 3.

## Inputs
The change and the record of what was done on it at stage 4: the tests, the adversarial review and its findings, the security agent's guidance, and the results of the automated checks and scanners.

## The checks
1. **Unit tests.** The automated tests, including the integration tests, exist, cover the story's acceptance criteria, and pass.
2. **Adversarial review.** The adversarial review of the change was carried out, and every finding has an answer from the engineer: fixed, or rebutted with evidence.
3. **Security review.** The security review was carried out, and the security scanners pass.

A squad can add its own checks, such as a scenario run for a story with a user-facing change.

## Measures it records
As well as checking, the agent measures the evidence for each change and documents it with the change, so there is a record of what stood behind each merge. For example:
- the percentage of the code covered by unit tests
- the number of automated tests and integration tests
- the number of security flaws found, and how many were fixed
- the number of adversarial review findings, and how each was answered
- how long the change spent in review

These are recorded as evidence, not set as targets. A coverage figure is easy to push up without making the tests any better, so the agent reports it and the trend over time, and does not fail a change on a number unless the squad has chosen a threshold. In a future implementation these records can feed a dashboard, so a squad and its leaders can see quality over time.

## Outputs
Per change: complete, or not complete, with exactly what is missing, and the recorded measures. A change that is not complete stays in review. The agent also gives a one-line summary.

## Human gate
Only a person can waive a failed check, and the waiver is recorded with the reason. The agent reports and the reviewing engineer decides. An AI's check never counts as a human approval.

## Draft prompt
```
Check whether everything needed before merge is in place for this change. It is complete only if:
- the automated tests and integration tests exist, cover the story's acceptance criteria, and pass
- the adversarial review was carried out, and every finding has an answer (fixed, or rebutted with evidence)
- the security review was carried out, and the security scanners pass

Say complete or not complete. If it is not complete, say exactly what is missing. Do not judge whether the change is a good one, only whether it is complete.
Also record the evidence for this change: the percentage of code covered by unit tests, the number of automated and integration tests, the number of security flaws found and fixed, and the number of adversarial review findings and how each was answered. Report these as figures. Do not fail the change on a figure unless a threshold has been set.
Finish with a one-line summary.
```

## Failure modes
- **Checking that something exists, not that it means anything.** A test that asserts nothing, or an adversarial review with no findings and no evidence it ran, is not a pass.
- **Gaming it** by producing the artefacts to get through. The reviewing engineer's code review and manual test are the defence.
- **Becoming a bottleneck.** It should be fast and quiet when the change is complete.
- **Measures turned into targets,** such as a coverage percentage that people learn to hit without improving the tests. Record them as evidence and watch the trend.

## Metrics
- Share of changes that fail the first check. It should fall as the squad matures.
- Waivers granted, and why.
- Defects found later in a change that this check passed.
