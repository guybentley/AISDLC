# backlog-watcher

**Stage:** across the lifecycle (it watches the entry to [stage 1](../docs/stages/01-opportunity-brief.md))
**Status:** idea

## Purpose
Looks for items that have been dropped into the product backlog outside this process, and highlights them to the product manager with suggestions on what to do. Its job is not to police people. It is to make sure nothing important is lost, and that everything in the backlog can be traced back to an opportunity.

## Why it exists
Work arrives from many directions: a stakeholder's request, a support ticket, an idea from sales, an engineer's quick note. Some of it is valuable. If it goes straight into the backlog, it skips the opportunity brief, the design and the success measures, and it breaks the trace from each story back to the customer need.

## Inputs
- Read access to the product backlog, in whatever tool the squad uses
- The opportunity briefs and story maps, so it can tell which items trace to one
- The items it has already flagged and what the product manager decided

## What counts as "outside the process"
- No link to an opportunity brief or a step on a story map
- Created directly in a ready or build state, skipping refinement
- Written as a solution, for example "add an API for X", with no stated customer need
- A likely duplicate of something already in the backlog
- Added by someone outside the squad, with no conversation recorded

A genuine bug or an urgent incident is not a failure of process. The agent should recognise these and suggest the fast route instead of flagging them as a problem.

## Outputs
A short digest for the product manager, daily or weekly depending on the volume. For each flagged item:
- what it is, who added it and when
- why it was flagged
- a suggestion and the reason for it

**Suggestions it can make**
1. **Belongs to an existing opportunity:** link it to that brief or story map step.
2. **A new opportunity:** start an opportunity brief, with the item as the first evidence.
3. **A duplicate:** merge it with the existing item.
4. **A bug or urgent fix:** take the fast route, with a note of why.
5. **Not now:** park it with a reason, and say when to look again.
6. **Decline:** decline it with a reason, and reply to the person who raised it.

## Human gate
The product manager decides what happens to every flagged item. The agent never moves, edits, deletes or closes an item on its own.

## Safeguards
- **Read-only by default.** If the squad chooses, it may add a label such as "outside process" and a comment, and nothing more.
- **Courteous.** Anyone who raised an item should get an acknowledgement and an answer. The agent can draft one for the product manager to send.
- **Private.** Backlog items can contain customer details, so it works only inside the organisation's own systems.

## Draft prompt
```
You watch a product backlog on behalf of the product manager. Find items that were added outside the agreed process, meaning they have no link to an opportunity brief or story map step, were created straight into a ready or build state, are written as a solution with no stated customer need, are likely duplicates, or were added by someone outside the squad with no discussion recorded.

Do not treat a genuine bug or urgent incident as a problem. Suggest the fast route for those.

For each flagged item give: what it is, who added it and when, why you flagged it, and one suggestion with the reason: link it to an existing opportunity, start a new opportunity brief, merge it as a duplicate, take the fast route, park it, or decline it.
Be courteous. Never change, move, delete or close an item. Keep the digest short.
```

## Failure modes
- **False positives,** such as flagging legitimate bugs or small fixes. That makes people ignore it.
- **Becoming a policing tool,** so people hide requests or stop raising them. Courtesy and a clear route for good ideas are the defence.
- **Only seeing the tracking tool.** Requests that arrive by email or chat never reach the backlog, so it cannot see them.
- **A weak trace.** If briefs and story maps are not linked to backlog items, everything looks outside the process.

## Metrics
- Items flagged per period, and the share the product manager acted on
- Time from an item being added to a decision on it
- Items that end up as an opportunity brief, against items declined or parked
