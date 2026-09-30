# test-author

**Stage:** 5 - Verification
**Status:** idea

## Purpose
Writes acceptance tests from a story's criteria, independently of the implementation, standing in for a dedicated QA function.

## Inputs
The story and its acceptance criteria, and the public interfaces of the system. **Not** the implementation or the author's reasoning.

## Outputs
Acceptance tests that fail if the criteria are not met, plus a note on any criterion that cannot be tested as written.

## Human gate
An engineer reviews the tests. A failing test raises a question: is the code wrong or are the criteria? A human decides.

## Draft prompt
```
Write acceptance tests for this story from its acceptance criteria only. You will not see the implementation.
One test per criterion at minimum, plus boundary and failure cases the criteria imply.
If a criterion is untestable or ambiguous, say so instead of guessing.
```

## Failure modes
- Tests that pass vacuously. Check that they fail against a broken implementation.
- Criteria too vague to test, which shows up as a list of ambiguities.

## Metrics
Defects caught by these tests that the author's own tests missed; mutation score on changed code.
