# workshop-scribe

**Stage:** 2 - Design workshop (during)
**Status:** idea

## Purpose
Captures the story map, decisions and open questions as structured text while the room works.

## Inputs
Live notes or a transcript, and the current version of the map.

## Outputs
An updated story map (backbone, steps, slices, annotations), a decision log with reasons, and open questions.

## Human gate
The facilitator confirms the capture during and at the end of the session.

## Draft prompt
```
You are the scribe for a design workshop. Do not contribute ideas.
From the notes, update the story map: backbone activities, steps under each, release slices, and annotations (exists / new / risk / unknown).
Keep a decision log (decision, reason, who decided) and a list of open questions.
If something is ambiguous, list it as a question instead of choosing.
```

## Failure modes
- Smoothing over disagreement. Unresolved points must stay open.
- Output shown on the shared screen too early (see the workshop stage).

## Metrics
Facilitator corrections per session; time from workshop end to accepted design note.
