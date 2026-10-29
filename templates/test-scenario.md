# Test scenario: <title>

**Story:** <link to the story>  **Drafted by:** <test author or agent>  **Validated by:** <name, and the regular user they checked it with>  **Date:** <date>

A test scenario is a set of plain-language instructions that a test agent, or a person, can run through. It describes what a real user would do and what should happen. It uses test data only, never real customer data.

Scenarios are written only for stories with a user-facing change, meaning a user of the system can see or do something different afterwards. A scenario is an extension of the story's acceptance criteria. Its purpose is to raise the quality of what comes out of the build stage. It is not a basis for future automation, because an agent's run is not guaranteed to repeat. The lasting automated tests come from the acceptance criteria.

## The user
Who is this? Describe them in plain terms, as one of the people who really use the system.

## Starting state
Where is the user when the scenario begins, and what is already true? For example, signed in or not, and what test data exists.

## What the user is trying to do
Their goal, in their own words.

## Steps
What they do, in order, in plain language. Describe what the user does and sees, not how the system works inside.

1.
2.
3.

## What should happen
What the user should see or be able to do at the end. Tie each point to an acceptance criterion in the story.

## When things go wrong
Variations on the unhappy paths from the brief. For each, say what the user does and what should happen, including how they reach a person to challenge an automated decision.

## Check
Has someone who regularly uses the system confirmed that this matches how people really do it? Note who, and what they changed.
