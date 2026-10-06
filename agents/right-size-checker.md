# right-size-checker

**Stage:** 3 - Stories and sizing
**Status:** idea

## Purpose
Checks each story against the right-size rule, which is that a story must fit into a single development iteration, and proposes splits for those that do not fit.

## Inputs
The stories, and the length of the squad's iteration (one to two weeks is recommended). Optionally, how long similar stories have taken before.

## Outputs
Per story: fits / does not fit, the reason, and a proposed split with acceptance criteria for each part.

## When it runs
In the squad's refinement and estimation session, as an independent check on the sizing. The squad does the estimating, and the agent reviews it.

## Human gate
Engineering accepts or edits the result.

## Draft prompt
```
Apply this right-size rule: a story fits if it can be completed within one development iteration of <iteration length>.
For each story say whether it fits and why, using the acceptance criteria and known complexity.
For those that do not, propose a split into stories that each fit, keeping the behaviour and acceptance criteria intact.
```

## Failure modes
- Splitting by technical layer instead of by observable behaviour.

## Metrics
Agreement rate with the squad's own sizing; the share of stories it passed that actually finished within the iteration. Also the share of stories it proposes to split. That should fall as the squad matures, because splits are mostly needed when a squad first forms. A rate that stays high suggests the stories are being written too large.
