# right-size-checker

**Stage:** 3 - Stories and sizing
**Status:** idea

## Purpose
Checks each story against the team's right-size rule and proposes splits for those that do not fit.

## Inputs
The stories, and the team's right-size rule (target cycle time and how it is applied). Optionally, historical cycle times.

## Outputs
Per story: fits / does not fit, the reason, and a proposed split with acceptance criteria for each part.

## Human gate
Engineering accepts or edits the result.

## Draft prompt
```
Apply this right-size rule: <team rule>.
For each story say whether it fits and why, using the acceptance criteria and known complexity.
For those that do not, propose a split into stories that each fit, keeping the behaviour and acceptance criteria intact.
```

## Failure modes
- Splitting by technical layer instead of by observable behaviour.

## Metrics
Agreement rate with the team's own sizing; cycle time of stories it passed.
