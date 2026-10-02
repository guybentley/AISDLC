# Stage 5: Verification

- **Human owner:** The reviewer with merge authority
- **Agents:** [test-author](../../agents/test-author.md), [adversarial-reviewer](../../agents/adversarial-reviewer.md)
- **Output:** independent tests, review findings and responses, a merge decision

## Purpose

Close the gap left when there is no dedicated QA function. Verification is the throughput limit of an AI SDLC, so it gets its own stage.

## Independent tests

A separate agent session writes acceptance tests from the story's acceptance criteria, without seeing the implementation. If tests and code disagree, either the code or the criteria are wrong, and a human decides which.

A CI check also flags changed code that no test would fail on if it broke.

## Adversarial review

A different model family from the author reviews the pull request. Its brief is to find how the change fails, not to assess whether it looks reasonable.

1. It sees the spec, the acceptance criteria and the diff. It does not see the author's reasoning or summary.
2. Each finding must include a concrete failure scenario: inputs or state that lead to a wrong result.
3. The author responds to every finding: fixed, or rebutted with evidence.
4. Disagreements go to a human after one or two rounds.

An AI reviewer's approval does not count toward required human approvals.

## Human gate

Merge is a human decision.

## Metrics

Finding acceptance rate, noise rate, unique catches (issues neither the author's tooling nor the human reviewer found), and escaped defects.

## Anti-patterns

- Reviewer sees the author's summary and anchors on it
- Findings without a failure scenario
- Treating the AI reviewer as an approver
