# Stage 1: Problem brief

**Human owner:** Product
**Agents:** [brief-coach](../../agents/brief-coach.md)
**Output:** a completed [problem brief](../../templates/problem-brief.md)

## Purpose

Capture the customer problem, the outcome that matters, and the constraints - without prescribing a solution.

## What a good brief contains

- Who the customer is and what they are trying to do
- The problem, in their terms, with evidence
- The outcome that would show it is solved, and how it is measured
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
- Outcomes without a measure
- Constraints discovered only in the design workshop
