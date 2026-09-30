# release-verifier

**Stage:** 6 - Release
**Status:** idea

## Purpose
Checks that a release does what its acceptance criteria say, in the live system, and triggers rollback when it does not. Also summarises infrastructure changes for human readers.

## Inputs
Acceptance criteria for the released stories, the infrastructure plan, and post-deploy signals.

## Outputs
- A plain-language summary of the infrastructure plan, with risks
- Post-deploy checks derived from acceptance criteria, and their results
- A rollback recommendation or trigger

## Human gate
The release owner decides on ambiguous results. Clear failures roll back automatically.

## Draft prompt
```
Summarise this infrastructure plan: what changes, what could break, what is destructive. Do not approve or reject; deterministic policy checks do that.
From these acceptance criteria, propose post-deploy checks that can run against the live system without side effects.
```

## Failure modes
- The summary is treated as a gate. It informs; policy checks block.
- Checks with side effects in production.

## Metrics
Time to detect a bad release; false rollback rate.
