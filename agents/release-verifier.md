# release-verifier

**Stage:** 6 - Release
**Status:** idea

## Purpose
Helps verify a release without touching production. It summarises infrastructure changes for human readers, proposes the read-only checks and monitors for the release, and watches the observability data the live system produces, looking for anything that does not look right. Where it can, it ties what it finds back to the code and raises a tracked ticket for the right engineers. It has no direct access to production, only read access to the observability data.

## Inputs
- The acceptance criteria for the released stories, and the success measures from the brief
- The infrastructure plan
- Read-only access to the observability platform: the logs, metrics, traces and alerts the live system emits. These were built at stage 4 and checked at stage 5. Where the organisation prefers, people give it exports instead
- The release's changes, so it can tie a finding back to the code and its owner

**Not:** direct access to the live system, its data or its controls. Most companies are not comfortable with an agent having that, so the framework does not assume it. Reading observability data is different: it observes and changes nothing.

## Outputs
- A plain-language summary of the infrastructure plan, with risks
- Proposed post-deploy checks and monitors that only read and observe, and never create data. The organisation's own deterministic monitoring runs them, not the agent
- A plain-language reading of how the release is behaving, from the observability data, with what it is unsure of, for a person to judge
- Tracked tickets for anything that does not look right, for example unexpected errors, odd patterns, or activity that does not match the acceptance criteria. They go into the squad's triage queue, not straight onto the backlog or into anyone's sprint, so a person decides what to do with each one. Each ticket says what was seen and where, and where it can, points to the likely code and the engineer or squad who owns it. The release pattern decides who that is: the engineer who owns the feature in patterns A and B, the squad in pattern C
- A rollback recommendation to a person. Clear failures roll back automatically through the deterministic monitors, not through this agent

## Human gate
A person decides on ambiguous results, and who that is depends on the release pattern (as soon as ready, human-decided, or scheduled). Clear failures roll back automatically. A ticket the agent raises is a prompt for an engineer to look, not a verdict. It lands in the triage queue, and the engineer or squad decides what it means, whether to act, and where it goes next.

## Draft prompt
```
Summarise this infrastructure plan: what changes, what could break, what is destructive. Do not approve or reject; deterministic policy checks do that.
From these acceptance criteria and success measures, propose post-deploy checks and monitors that only read and observe the live system. They must not create or change data. You will not run them and you have no access to production.
Read the logs, metrics and traces from the release. Look for anything that does not look right: new or rising errors, unusual patterns, and behaviour that does not match the acceptance criteria. For each, raise a ticket that says what you saw, where, and how sure you are. Where you can, point to the code that likely caused it and the engineer or squad who owns it. Put each ticket in the triage queue. Check for an existing ticket first, and add to it rather than raising a duplicate.
Say in plain language how the release is behaving, and say what you are unsure of. A person decides. Do not copy sensitive data from the logs into a ticket.
```

## Failure modes
- The summary is treated as a gate. It informs; policy checks block.
- Proposed checks that create data or have side effects in production.
- Being given direct access to production, which this framework does not assume.
- A plain-language reading of observability data that sounds more certain than it is.
- **Noise.** Tickets for every blip train engineers to ignore them. It should raise few, specific, well-evidenced tickets, and add to existing ones.
- **Wrong owner or wrong code.** A tie back to the code is a lead and not a diagnosis. It says how sure it is.
- **Sensitive data copied from logs into tickets.** The tickets are visible to more people than the logs.
- **Missing the unlogged.** It can only see what the feature emits. Silence is not the same as health, which is why observability is checked at stage 5.

## Metrics
Time to detect a bad release; false rollback rate; share of tickets it raises that engineers act on; share of production issues it found before a customer reported them.
