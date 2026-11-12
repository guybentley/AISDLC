# Stage 5: Verification

- **Human owner:** The engineer who owns the story, as in stage 4
- **Reviewer:** A different engineer, who reviews the code and tests the change by hand. A squad with a QA can involve them, see [engineers as each other's QA](#engineers-as-each-others-qa)
- **Agents:** [verification-checker](../../agents/verification-checker.md)
- **Output:** independent automated tests, checked as part of the review, a human code review and an unscripted manual test of the change, and a merge decision

## Purpose

Make sure what was built is checked independently of whoever built it: by a different engineer who reviews the code and uses the feature as a customer would, with the automated tests checked as part of that review. This is where quality is confirmed, so it gets its own stage.

## Independent automated tests

The automated tests and integration tests are written as part of the feature build, at [stage 4](04-build.md), by a separate agent from the one writing the code. That is what makes them independent. They arrive at stage 5 ready to be checked as part of the review. The reviewer checks that they cover the story's acceptance criteria and that they would fail if the code broke, with a lighter touch than the feature itself. Tests are not customer-facing and can be a little more fragile, so they have a lower bar for independent review: one human paired with an agent is enough, and the tests do not get a second reviewer of their own.

A CI check also flags changed code that no test would fail on if it broke. If a test fails, a human decides whether the code, the test or the criteria are wrong.

## Human review and manual testing

A different engineer from the one who built the change reviews the small change that the agent and the owning engineer produced, in two ways. They review the code, and they test the change by hand. The manual test is the important part. This is always a different engineer, including on the stories the owning engineer wrote themselves, so nobody marks their own work.

The manual test is not documented and does not follow a script. A scripted test can be run by an agent, so the human adds value by using the feature as a customer or user would, freely, and noticing what a script would not.

The reviewer also checks that the change can be watched in production: that it emits the signals [stage 6](06-release.md) will rely on, and that they would actually show a problem.

The engineer who owns the story owns the feature and is accountable for it delivering what the customer needs. Automated checks cannot confirm that on their own, which is why the reviewer tries the feature the way the customer would, against the story's acceptance criteria and the outcome in the brief.

## Engineers as each other's QA

A dedicated QA has strengths and risks, and the framework weighs both.

- **For a QA:** a QA thinks differently from an engineer, and will test by hand in ways the engineer may not think of.
- **Against a QA:** it can lower the quality bar that engineers set for themselves, if they stop thinking about how their own work can be tested independently.
- **For engineers as each other's QA:** having to act as the unofficial QA for another engineer builds useful testing muscles, and that improves the quality of their own work.

The framework works either way, with an official QA or without one.

- **Without a QA:** a different engineer reviews the code and manually tests each change, so engineers are each other's QA.
- **With an official QA:** the QA brings their different way of thinking to the manual test. The squad decides how the QA and the reviewing engineer share the work, keeping the trade-offs above in mind, so the quality bar does not drift away from the engineers.

## Completeness check

Before the reviewing engineer decides on merge, the [verification-checker](../../agents/verification-checker.md) confirms that everything needed is in place:

- the automated tests and integration tests exist, cover the acceptance criteria, and pass
- the adversarial review was carried out, and every finding has an answer
- the security review was carried out, and the security scanners pass
- observability is in place: the change emits the logs, metrics, traces and alerts that the release monitors and the brief's success measures need, and no sensitive data is written to the logs

Anything missing keeps the change in review, and the agent says exactly what is missing. Only a person can waive a failed check, and the reason is recorded. The check is about completeness and not quality. The code review and the manual test judge quality, and an AI's check never counts as a human approval. The adversarial review itself is part of the build: see [stage 4](04-build.md#adversarial-code-review).

The agent also measures and documents the evidence for each change, for example the percentage of code covered by unit tests, the number of automated tests, and the number of security flaws found and fixed. These are recorded as evidence and not set as targets, because a coverage figure is easy to push up without improving the tests. In a future implementation the records can feed a dashboard.

## Human gate

Merge is a human decision. The reviewing engineer decides, after the code review and the manual test.

## Metrics

Escaped defects, defects found in review that the automated checks missed, time in review, and the share of changes that fail the completeness check first time.

## Anti-patterns

- The person who built the change reviewing it
- A manual test that follows a written script
- Reviewing with the agent's summary in hand, so it anchors the review
- Treating an AI's check as an approval
- Passing a change that emits no signals, because nothing can then tell whether the release is working
