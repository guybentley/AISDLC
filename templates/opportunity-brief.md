# Opportunity brief: <title>

**Owner:** <product manager>  **Date:** <date>  **Status:** draft / reviewed by brief-coach / ready for workshop

## Customer
Who are they, and what are they trying to do?

## Opportunity
What is the opportunity for the customer? It may be a problem to solve, or a benefit they would value. Write it in plain language, so that anyone in your industry could read it and understand it. No internal jargon, code names or unexplained acronyms. Use a number where you can.

## Evidence
How do we know? List each source and what it showed. Prefer more than one method.

| Method | Source and date | What it showed |
|---|---|---|
| Measured the current system | e.g. drop-out rate at each step of a process (a problem), or how many customers already use a workaround or ask for the capability (a benefit) | |
| Customer survey | e.g. sample size, questions asked | |
| Customer interviews | e.g. number of interviews, who | |

If one method is missing, say what it would add.

## Outcome
What would be true if this were delivered? How will we measure it, and where are we today?

| Outcome | Measure | Baseline (today) | Target |
|---|---|---|---|
| e.g. more customers finish onboarding (a problem solved) | e.g. % who start onboarding and do not finish | e.g. measured over the last 90 days | |
| e.g. customers save time on a routine task (a benefit delivered) | e.g. average minutes to complete the task | e.g. measured over the last 90 days | |

Record the measure, the baseline and the target. If there is no baseline because this is new, write "none" and say how one will be established, for example by measuring the first release or using a comparable product as a reference. Do not say how to reach the target.

## Scale
How big is the opportunity? If the existing system already gives these figures, say where they come from. If not, give your best estimate and mark it as one. A range is fine.

| Measure | Figure or range | Known or estimated, and the basis |
|---|---|---|
| Number of customers or users | | |
| Transactions or requests per day | | |
| Busiest period (peak) | | |
| Expected growth | | |
| Amount of data | | |

Give the scale only. Do not say how to handle it.

## Customer workflows
How does a customer transact, start to finish? Show the happy path and where each failure branches off. Keep it at the customer level: what they do and see, with no systems or technology.

```mermaid
flowchart TD
    A[Customer starts sign-up] --> B[Customer enters details]
    B --> C{Identity check}
    C -->|Passes| D[Account opened]
    C -->|Fails| E[Customer told why and what they can do]
    E --> F[Retry or provide other evidence]
    F --> C
    E --> G[Customer asks for a person to review]
    G --> H{Person reviews}
    H -->|Overturned| D
    H -->|Upheld| I[Customer told the outcome and their options]
```

## Unhappy paths
What happens when it goes wrong for the customer? For each failure, say what the customer sees, what they can do next, and how they reach a person to challenge an automated decision.

| Failure | What the customer experiences | Next step for the customer | Who handles it, and how fast |
|---|---|---|---|
| e.g. identity (KYC) check fails | | e.g. retry, other evidence, or ask for a person to review | |

Also say what we will track, for example failures, challenges, challenges upheld, and time to resolve.

## Constraints
Cost, deadlines, compliance, performance, dependencies, anything the solution must respect.

## Out of scope
What we are deliberately not solving.

## Open questions
What we do not yet know.

## Suggestions (optional, non-binding)
Ideas about approach. These are input for the design workshop, not requirements.
