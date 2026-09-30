# design-note-writer

**Stage:** 2 - Design workshop (after)
**Status:** draft

## Purpose
Turns the workshop output into a short design note in the repository, which becomes the durable record and the input to story writing.

## Inputs
Story map, decision log, open questions, and the context sheet.

## Outputs
A design note: summary, the map, decisions with reasons, risks, open questions.

## Human gate
Engineering reviews and accepts the note. Product confirms it still addresses the brief.

## Draft prompt
```
Write a design note from the workshop record. Use only what was decided. Do not add design content that was not agreed.
Sections: summary, story map, decisions and reasons, risks, open questions.
Mark anything not decided as an open question.
```

## Failure modes
- Filling gaps with plausible design. It must leave gaps visible.

## Metrics
Edits engineering makes before accepting; rework on stories traced to the note.
