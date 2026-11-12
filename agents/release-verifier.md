# release-verifier

**Stage:** 6 - Release
**Status:** idea

## Purpose
Helps verify a release without touching production. It summarises infrastructure changes for human readers, and proposes the read-only checks and monitors for the release, derived from the acceptance criteria and the success measures. It has no direct access to production.

## Inputs
- The acceptance criteria for the released stories, and the success measures from the brief
- The infrastructure plan
- Optionally, monitoring data that people give it, such as an export of error rates and performance

**Not:** direct access to the live system. Most companies are not comfortable with an agent having it, so the framework does not assume it.

## Outputs
- A plain-language summary of the infrastructure plan, with risks
- Proposed post-deploy checks and monitors that only read and observe, and never create data. The organisation's own deterministic monitoring runs them, not the agent
- If given monitoring data, a plain-language reading of how the release is behaving, for a person to judge
- A rollback recommendation to a person. Clear failures roll back automatically through the deterministic monitors, not through this agent

## Human gate
A person decides on ambiguous results, and who that is depends on the release pattern (as soon as ready, human-decided, or scheduled). Clear failures roll back automatically.

## Draft prompt
```
Summarise this infrastructure plan: what changes, what could break, what is destructive. Do not approve or reject; deterministic policy checks do that.
From these acceptance criteria and success measures, propose post-deploy checks and monitors that only read and observe the live system. They must not create or change data. You will not run them and you have no access to production.
If given monitoring data, say in plain language how the release is behaving, and say what you are unsure of. A person decides.
```

## Failure modes
- The summary is treated as a gate. It informs; policy checks block.
- Proposed checks that create data or have side effects in production.
- Being given direct access to production, which this framework does not assume.
- A plain-language reading of monitoring data that sounds more certain than it is.

## Metrics
Time to detect a bad release; false rollback rate.
