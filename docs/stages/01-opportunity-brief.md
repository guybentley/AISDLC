# Stage 1: Opportunity brief

- **Human owner:** The product manager
- **Agents:** [brief-coach](../../agents/brief-coach.md)
- **Output:** a completed [opportunity brief](../../templates/opportunity-brief.md) and a basic [story map](../../templates/story-map.md) of the customer need, from starting state to completed opportunity

## Purpose

Capture the customer opportunity, the outcome that matters, and the constraints - without prescribing a solution. An opportunity does not have to be a problem to solve. It can be a pure benefit the customer would value.

## Goal

Work out what the customer actually needs or would value. The opportunity may be a problem to solve, such as customers dropping out of a process, or a pure benefit, such as a capability they would use and value. Gathering information for the brief is an investigation, not a specification exercise: the output is an evidence-backed statement of the customer's opportunity, and nothing about how to deliver it.

## Finding the opportunity

The opportunity can be established in several ways. Use whichever fit, and combine them where you can, because each answers a different question.

| Method | Example | What it tells you |
|---|---|---|
| **Measure the current system** | For a problem: the percentage of customers who drop out before completing a process. For a benefit: how many customers already use a workaround, or ask for the capability | Where and how often it happens, and how big the opportunity is |
| **Customer surveys** | A short survey to a sample of users about a task or process | How widespread a perception is, across many customers |
| **Customer interviews** | Conversations with customers about what they were trying to do and what got in the way | Why it goes wrong, in the customer's own words |

Measurement shows where the opportunity is, interviews explain why it matters, and surveys show how many people share it. A brief built on one method alone should say so, and record what the other methods would add.

## Writing it clearly

Describe the opportunity so that anyone in your industry could read it and understand it, with no knowledge of your company, your systems or your team.

- Use plain words and the customer's own terms.
- Avoid internal jargon, product code names and acronyms. If you need a term, define it once.
- State the opportunity as something that happens to the customer, or something they would gain, not as something missing from your system.
- Prefer a specific statement with a number to a general one.

A good test: give the opportunity statement to someone from another company in your industry. If they can explain it back to you, it is clear enough.

## Defining success

Every brief defines how success will be measured. Where something already exists, it also records where things stand today, before any work starts. That is the baseline, and without it there is nothing to compare against.

For example, if the opportunity is to improve customer onboarding:

1. Choose the measure: the drop-out rate, meaning the percentage of customers who start onboarding and do not finish it.
2. Measure where it stands today. This is the baseline.
3. Set a target.

Sometimes there is no baseline, because the opportunity is new or breaks new ground. Then say so in the brief, and say how a baseline will be established. For example, measure the first release, or use a comparable product or a market figure as a reference. Treat the target as a first estimate, to be revisited when real data arrives.

The same applies to a benefit. Choose a measure of what the customer gains, such as the share of customers who use a new capability, or the time they save on a task. Record today's position and set a target.

The brief records the measure, the baseline where there is one, and the target. It does not say how to reach the target. That is for the squad to work out in later stages.

## Scale

Say how big the opportunity is, so the squad can design something proportionate, neither over-built nor under-built. If the existing system already gives the figures, say where they come from. If it does not, give your best estimate and say it is an estimate.

Useful figures include:

- the number of customers or users
- the number of transactions or requests per day, and when they peak
- how fast that is likely to grow
- the amount of data involved

A range is more honest than a single number, and an estimate with its basis is better than a blank. The brief gives the scale, not the capacity or technology to handle it. That is a design decision for the squad.

## Unhappy paths

A brief describes what happens when things go wrong, not only when they go right. Most problems customers remember happen on the unhappy path, and it is the part most often left until late in delivery, when it is expensive to add.

A benefit can go wrong too: the customer cannot get it, or it does not work as promised.

Take customer onboarding. It is easy to describe the customer who signs up and is approved. Also describe the one whose identity check (KYC, "know your customer") fails. Ask:

- **What does the customer see and understand?** Do they know what happened, in plain language, and what they can do next?
- **Is it a dead end?** A failed check should lead somewhere, such as retrying, supplying different evidence or speaking to a person, and should never simply end the journey.
- **Can they challenge it?** Where an automated process makes a decision about a customer, there must be a route to a person who can review it and overturn it. The customer must be able to find that route.
- **Who picks it up, and how quickly?** Name the role that handles escalations and the time the customer can expect to wait.
- **What do we learn from it?** Track how many failures there are, how many are challenged, how many are overturned and how long they take. A high overturn rate shows the automated process is wrongly turning customers away, which is a problem in its own right.

Rules about automated decisions and customer rights differ between countries and industries. Record the ones that apply as constraints, and check them with your legal or compliance function.

The unhappy paths in the brief feed the rest of the lifecycle. They are worked through in the design workshop, may become stories with their own acceptance criteria, and are tested by the independent [test author](../../agents/test-author.md).

## Customer workflows

The brief includes basic workflows showing how a customer transacts: the steps they take, what they see, and what happens when something goes wrong. The product manager drafts them with the [brief-coach](../../agents/brief-coach.md), which asks about each step and draws the result.

Workflows stay at the customer level. They say what the customer does and experiences, not which systems are involved. They are checked with real customers or the people who support them where possible, and the design workshop then refines them into the story map.

## A basic story map of the customer need

The goal of the product manager and the agent together is a brief the squad can act on, and a **basic story map of the customer need** for the squad to work through in the design workshop.

The map has a **starting state**, where the customer is when their need arises or they first reach out, and a **completed opportunity**, where the opportunity has been realised for them. Between them it holds the main steps the customer takes, in the customer's terms, drawn from the customer workflows, and it marks the points where things can go wrong. The completed opportunity matches the outcome in the brief.

Everything else is left blank on purpose: the stories, the release slices and the annotations. The squad fills those in together, so the design comes from the room and not from the brief.

Use whichever tool your team works in. Whiteboard tools such as Miro or a Confluence whiteboard suit this well, and the framework also provides a text version. The rows matter more than the tool.

The backbone is a draft. The team can rename, reorder, add or remove anything on it.

## What a good brief contains

- Who the customer is and what they are trying to do
- The opportunity, in plain language, with evidence from the methods above: the problem to solve or the benefit to deliver
- The outcome that would show it is solved, with a measure, a baseline where one exists, and a target
- The scale of the opportunity: customers, transactions per day, peaks and growth, known or estimated
- Basic customer workflows, from start to finish, in the customer's terms
- What happens when things go wrong: the unhappy paths, including how a customer challenges an automated decision
- Constraints: cost, time, compliance, performance, dependencies
- What is explicitly out of scope
- Open questions

## What is left for the design workshop

Architecture, API design, technology choices and ideas such as "an agent that does X" are design decisions, and they belong to [stage 2](02-design-workshop.md). That is where the squad (product, engineering, platform and any other relevant party) comes together. Solving the opportunity is part of the design workshop, with everyone in the room.

If you already have ideas about how to deliver it, they are welcome. Put them in the Suggestions section of the brief, as input for the squad to consider, not as requirements.

## Why this stage exists

AI makes it easy for anyone to produce a plausible architecture from a long document. Without knowing what the organisation already runs on, such as its existing systems, cloud platform and tools, that architecture can miss what is already there, and can miss better options such as buying a ready-made product. Choosing between them is a decision for the squad together, so the best way to meet the need is chosen. This stage keeps the focus on the opportunity, and leaves the design to the squad.

## Human gate

The product manager accepts the brief once the brief-coach has reviewed it and the product manager is satisfied it is an opportunity statement that is ready for the design workshop. The agent's review is the independent check, so no separate human review is needed at this stage. The squad can still raise questions about the brief when the workshop begins.

## Anti-patterns

- The brief is a solution spec in disguise
- Outcomes without a measure
- No baseline, and no word on why there is none or how one will be established
- No sense of scale, so the design ends up over-built or under-built
- Only the happy path described, so failures and rejections are discovered in build or in production
- An automated decision about a customer with no way for them to challenge it
- An opportunity statement full of internal jargon that outsiders could not follow
- Treating every opportunity as a problem, so benefits the customer would value are never captured
- Known business constraints (budget, deadlines, compliance) left out of the brief
