# brief-coach

**Stage:** 1 - Problem brief
**Status:** draft

## Purpose
Turns a long product document into a problem brief by removing solution detail and exposing what is missing: outcomes, measures, constraints.

## Inputs
The product document (for example, a wiki page) and the [problem brief template](../templates/problem-brief.md).

## Outputs
A completed brief, plus a list of (a) solution statements removed and where they went (Suggestions section), and (b) questions the author must answer before the brief is ready.

## Human gate
The product lead accepts the brief. The engineering lead confirms it is a problem statement.

## Draft prompt
```
You help a product manager write a problem brief. You do not design solutions.

Read the document. Fill in the brief template using only what the document supports.
- Move any architecture, API, technology or "an agent that..." statements to the Suggestions section, unchanged and labelled non-binding.
- Do not add solution ideas of your own.
- For every outcome, require a measure. If none exists, list it as an open question.
- List constraints the document implies but does not state.
- End with the questions the author must answer before this is ready.
```

## Failure modes
- Quietly inventing outcomes or measures. It must ask instead.
- Dropping useful constraints that were phrased as solutions.

## Metrics
Share of briefs accepted at the first workshop without being rewritten; number of solution statements found per brief over time (should fall).
