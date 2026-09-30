# Stage 1: Problem brief

**Human owner:** Product
**Agents:** [brief-coach](../../agents/brief-coach.md)
**Output:** a completed [problem brief](../../templates/problem-brief.md) and an empty [story map](../../templates/story-map.md) for the team

## Purpose

Capture the customer problem, the outcome that matters, and the constraints - without prescribing a solution.

## Goal

Work out what problem the customer actually has. Gathering information for the brief is an investigation, not a specification exercise: the output is an evidence-backed statement of the customer's problem, and nothing about how to solve it.

## Finding the problem

The problem can be established in several ways. Use whichever fit, and combine them where you can, because each answers a different question.

| Method | Example | What it tells you |
|---|---|---|
| **Measure failure in the current system** | Percentage of customers who drop out before completing a process | Where and how often things go wrong, and how big the problem is |
| **Customer surveys** | A short survey to a sample of users about a task or process | How widespread a perception is, across many customers |
| **Customer interviews** | Conversations with customers about what they were trying to do and what got in the way | Why it goes wrong, in the customer's own words |

Measurement shows where the problem is, interviews explain why, and surveys show how many people share it. A brief built on one method alone should say so, and record what the other methods would add.

## Writing it clearly

Describe the problem so that anyone in your industry could read it and understand it, with no knowledge of your company, your systems or your team.

- Use plain words and the customer's own terms.
- Avoid internal jargon, product code names and acronyms. If you need a term, define it once.
- State the problem as something that happens to the customer, not as something missing from your system.
- Prefer a specific statement with a number to a general one.

A good test: give the problem statement to someone from another company in your industry. If they can explain it back to you, it is clear enough.

## Defining success

Every brief defines how success will be measured, and measures where things stand today, before any work starts. Without that starting point there is nothing to compare against.

For example, if the aim is to improve customer onboarding:

1. Measure the current drop-out rate, meaning the percentage of customers who start onboarding and do not finish it. This is the baseline.
2. Set a target for improvement.
3. Try different ways of improving onboarding, and measure each one against the baseline and against each other. A/B testing, where different groups of customers get different versions at the same time, is a good way to do this.
4. Keep what works.

The brief records the measure, the baseline and the target. It does not choose the approach. Trying and comparing approaches is what the later stages do, so the brief should leave room for more than one.

Where there are too few customers for a fair A/B test, compare results before and after the change against the baseline instead.

## Unhappy paths

A brief describes what happens when things go wrong, not only when they go right. Most problems customers remember happen on the unhappy path, and it is the part most often left until late in delivery, when it is expensive to add.

Take customer onboarding. It is easy to describe the customer who signs up and is approved. Also describe the one whose identity check (KYC, "know your customer") fails. Ask:

- **What does the customer see and understand?** Do they know what happened, in plain language, and what they can do next?
- **Is it a dead end?** A failed check should lead somewhere, such as retrying, supplying different evidence or speaking to a person, and should never simply end the journey.
- **Can they challenge it?** Where an automated process makes a decision about a customer, there must be a route to a person who can review it and overturn it. The customer must be able to find that route.
- **Who picks it up, and how quickly?** Name the role that handles escalations and the time the customer can expect to wait.
- **What do we learn from it?** Track how many failures there are, how many are challenged, how many are overturned and how long they take. A high overturn rate shows the automated process is wrongly turning customers away, which is a problem in its own right.

Rules about automated decisions and customer rights differ between countries and industries. Record the ones that apply as constraints, and check them with your legal or compliance function.

The unhappy paths in the brief feed the rest of the lifecycle. They are worked through in the design workshop, become stories with their own acceptance criteria, and are tested by the independent [test author](../../agents/test-author.md).

## Customer workflows

The brief includes basic workflows showing how a customer transacts: the steps they take, what they see, and what happens when something goes wrong. The product manager drafts them with the [brief-coach](../../agents/brief-coach.md), which asks about each step and draws the result.

Workflows stay at the customer level. They say what the customer does and experiences, not which systems are involved. They are checked with real customers or the people who support them where possible, and the design workshop then refines them into the story map.

## The empty story map

The goal of the product manager and the agent together is a brief the team can act on, and an **empty story map** for the team to work through in the design workshop.

They prepare the backbone of the map from the customer workflows: the activities the customer performs, the steps within each, and the points where things can go wrong. Everything else is left empty on purpose: the stories, the release slices and the annotations. The team fills those in together, so the design comes from the room and not from the brief.

Use whichever tool your team works in. Whiteboard tools such as Miro or a Confluence whiteboard suit this well, and the framework also provides a text version. The rows matter more than the tool.

The backbone is a draft. The team can rename, reorder, add or remove anything on it.

## What a good brief contains

- Who the customer is and what they are trying to do
- The problem, in plain language, with evidence from the methods above
- The outcome that would show it is solved, with a measure, today's baseline and a target
- Basic customer workflows, from start to finish, in the customer's terms
- What happens when things go wrong: the unhappy paths, including how a customer challenges an automated decision
- Constraints: cost, time, compliance, performance, dependencies
- What is explicitly out of scope
- Open questions

## What it must not contain

Architecture, API design, technology choices or "an agent that does X". These are design decisions for [stage 2](02-design-workshop.md). Suggestions are welcome but belong in a clearly labelled section, as input, not specification.

## Why this stage exists

AI makes it trivial for anyone to produce a plausible architecture from a long document. Without the stack context, that architecture is usually wrong for the organisation and gets ignored, so effort is wasted and the actual problem is left vague.

## Human gate

The product lead and the engineering lead agree the brief is a problem statement and is ready for a workshop.

## Anti-patterns

- The brief is a solution spec in disguise
- Outcomes without a measure, or a measure without a baseline
- Only the happy path described, so failures and rejections are discovered in build or in production
- An automated decision about a customer with no way for them to challenge it
- A problem statement full of internal jargon that outsiders could not follow
- Constraints discovered only in the design workshop
