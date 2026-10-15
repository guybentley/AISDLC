# Stage 3: Stories and sizing

- **Human owners:** Product (story writing), Engineering (estimation). The whole squad takes part in the refinement and estimation session.
- **Agents:** [story-writer](../../agents/story-writer.md), [right-size-checker](../../agents/right-size-checker.md), [test-author](../../agents/test-author.md), [readiness-checker](../../agents/readiness-checker.md)
- **Output:** initiatives, epics and stories, each with testable acceptance criteria and a trace to the story map, refined and estimated by the squad

## Purpose

Turn the story map and design note into a roadmap the squad can build, without hand-writing tickets.

## How it works

1. **Write the stories.** The product manager and the story-writer agent write the epics and stories together, with their acceptance criteria. Either can lead: the product manager can direct the agent, or the agent can draft and the product manager can shape it. Product owns the result.
2. **Refine and estimate, in one step.** The whole squad meets once to refine and estimate. They read the stories, ask questions, tighten the acceptance criteria, estimate each story, and split any that are too big. Engineering owns the estimates. The right-size-checker reviews the sizing independently.

The test author is part of the squad, whether an agent or a person. In this session it checks that every acceptance criterion can be tested as written, flags those that cannot, and estimates the testing effort. A story cannot be estimated properly unless the squad knows how it will be tested, so this check happens here and not later.

Refinement and estimation are a single step, not two. If the earlier stages went well, with the opportunity, the design and the success measures already agreed, the session should be fast. Squads also get faster at it over time as they refine their approach.

Stories should rarely need splitting once a squad is practised at this. Splitting is more likely when a squad first forms, while its members learn to work together and to judge size alike. A squad that splits many stories after it has settled is a signal worth looking at: the stories may be written too large, or the earlier stages may have left something unclear.

## Rules

- Every story traces to a step on the story map.
- Every story has acceptance criteria that can be turned into a test. This is the thread the rest of the lifecycle reads.
- The ways of measuring success agreed in [stage 2](02-design-workshop.md) are detailed here: how each measure is taken, and which stories and acceptance criteria check it.
- Every story fits into a single development iteration. See [sizing](#sizing).

## Sizing

This framework uses **right-sizing** in place of story points. Right-sizing means making sure a story can fit into a single development iteration. A story either fits, or it is split. Forecasting uses throughput (stories finished per iteration), not point velocity.

**Iteration length.** The squad chooses how long an iteration is, as short or as long as it wants. In practice, one to two weeks is recommended.

**Why it still matters in the age of AI.** Right-sizing can look like an anti-pattern now that agents make building faster. It is still necessary, for two reasons:

1. **Accurate roadmaps and delivery horizons.** When every story fits into an iteration, the squad can forecast what will be delivered and when.
2. **Small increments of value.** A squad focused on fitting everything into small iterations works in fast feedback loops. A squad that is not focused on this will not.

## Human gate

At the end of the refinement session the squad accepts the stories as ready to build. Product accepts the scope, the priority and the acceptance criteria, once the test author confirms they can be tested. Engineering accepts the estimates and the sizes, after the right-size-checker's independent review.

## Final gate

Before any story moves to build, the [readiness-checker](../../agents/readiness-checker.md) confirms that every story is estimated and has its acceptance criteria defined. A story that fails stays in refinement, and the agent says exactly what is missing. Where it has access, the agent also moves each story into the right state in the squad's tracking tool, such as Jira or Linear, so a story cannot reach build by being dragged across a board. Only a person can waive a failed check, and the reason is recorded.

This gate checks that the stories are complete. It does not judge whether they are good. The squad's acceptance at the end of the refinement session does that.

## Anti-patterns

- Acceptance criteria that describe implementation instead of behaviour
- Stories generated from the raw brief rather than the map and design note
