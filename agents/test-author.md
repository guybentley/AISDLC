# test-author

**Stage:** 3 - Stories and sizing (refinement and estimation), and 4 - Build
**Status:** idea

## Purpose
A member of the squad, either an agent or a person, who owns how the work will be tested. It stands in for a dedicated QA function.

**At stage 3,** it takes part in the squad's refinement and estimation session. It checks that every acceptance criterion can be tested as written, flags any that cannot, and estimates the testing effort. Without it the squad cannot estimate a story properly, because nobody knows how it will be tested.

**Also at stage 3,** for stories with a user-facing change, it drafts the [test scenarios](../templates/test-scenario.md): plain-language instructions that a test agent, or a person, can run through to test a story the way a real user would. The agent drafts example scenarios from the acceptance criteria and the brief's workflows and unhappy paths. The product manager, or someone else in the squad, then validates with a regular user of the system that they match real use. The scenarios are an extension of the acceptance criteria and exist to raise the quality of what the build stage produces. They are not a basis for future automation, because an agent's run is not guaranteed to repeat.

**At stage 4, during the build,** a separate agent from the coding agent builds the automated tests and integration tests for the story. That separation is what makes them independent. The test agent is paired with a human: the SDET where the squad has one, and otherwise the engineer who owns the story. The tests arrive at stage 5 ready to be checked as part of the review.

**The same rhythm as the code.** About one set of tests in every three or four, the human writes the tests themselves and the agent reviews them, so the human keeps their hand in. This applies to an SDET in the same way as to an engineer.

**A lower bar for independent review.** Automated tests and integration tests are not customer-facing and can be a little more fragile than the feature, so they need a lower bar of independent review. One human paired with an agent is enough. They are not given a second reviewer, which would also make the squad too big, for example by needing a second SDET.

## Inputs
The story and its acceptance criteria, and the public interfaces of the system. It does not take the coding agent's reasoning or summary as input.

## Outputs
Automated tests and integration tests that fail if the criteria are not met, plus a note on any criterion that cannot be tested as written.

## Human gate
The human paired with the agent decides what goes in. At stage 5 the reviewing engineer checks the tests as part of the review, with a lighter touch than the feature. A failing test raises a question: is the code wrong, the test, or the criteria? A human decides.

## Draft prompt
```
Write automated tests and integration tests for this story from its acceptance criteria and the public interfaces. You are a separate agent from the one writing the code, and you do not take its reasoning as input.
One test per criterion at minimum, plus boundary and failure cases the criteria imply.
If a criterion is untestable or ambiguous, say so instead of guessing.
```

## Failure modes
- Tests that pass vacuously. Check that they fail against a broken implementation.
- Criteria too vague to test, which shows up as a list of ambiguities.

## Metrics
Defects caught by these tests that the author's own tests missed; mutation score on changed code.
