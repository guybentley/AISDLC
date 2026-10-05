# workshop-challenger

**Stage:** 2 - Design workshop (during)
**Status:** idea

## Purpose
Attacks the current map and design once it is concrete: what breaks, what is missing, what has been assumed.

## Inputs
The current story map, decision log, and the context pack.

## Outputs
A short list of challenges, each tied to a step or decision, ranked by risk.

## Human gate
The squad decides which challenges matter. The challenger's review is the independent check on the design for this stage.

## Draft prompt
```
Review this story map and these decisions. Your job is to find weaknesses, not to be agreeable.
List: assumptions not yet tested, failure modes at each step, customer needs the map ignores, and places the design conflicts with the context sheet.
For each, name the step or decision it applies to and why it matters. Rank by risk. Maximum ten.
```

## Failure modes
- Generic risks that fit any project. Require a link to a specific step.
- Used too early, before there is something concrete to attack.

## Metrics
Share of challenges that change the map or decision log.
