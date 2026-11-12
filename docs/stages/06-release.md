# Stage 6: Release

- **Human owner:** Depends on the release pattern (see below)
- **Agents:** [release-verifier](../../agents/release-verifier.md)
- **Output:** a verified release or an automatic rollback

## Purpose

Releasing frequently is only safe if problems are caught quickly. Move safety checks to after the merge as well as before it.

## Release patterns

Different companies release in different ways, so this stage works with three main patterns.

**A. Release as soon as it is ready.** Changes go to production as soon as they are ready, once they have passed stage 5.

- **The squad owns the release time, collectively.** The product manager brings the customer's voice to it. The squad chooses when to stage the feature or features to production.
- **The engineer releasing owns the quality of the feature in production.**
- **Handing off production testing.** Sometimes the engineer cannot test the feature in production, for example where the data is highly confidential and engineers do not have direct access. Then the testing is handed off to another person who does.
- **Safety** comes from the automated post-deploy checks and the automatic rollback, so this needs strong automated checks.

It suits software-as-a-service platforms, where the engineers control both the infrastructure and the software.

**B. Release at the end of an iteration, or when a full feature is delivered.** A person decides when to release. For example, the engineering manager and the product manager may both have to approve before anything goes to production.

- **Engineers still own the quality of their features in production.** The release is a few weeks' worth of changes at most, so it is still small enough for each engineer to follow their own feature through, as in pattern A.
- **Handing off production testing** works as in pattern A: where the engineer cannot test in production, someone with access does.

It suits cases where the customer's infrastructure is involved, or where customers run the software themselves, such as locally installed instances.

**C. Release on a set schedule.** Changes wait for the next scheduled release, such as weekly, monthly or a fixed window. The schedule is agreed in advance, and the release is approved at the scheduled point.

- **The squad owns the quality of the release in production.** A release holds more changes than in A or B, so quality is owned by the squad together and not by each engineer for their own feature.
- **Bugs reported go back into the cycle.** A bug is either fixed in an accelerated release, if it cannot wait, or folded into the next scheduled release.

It suits niche or high-risk environments. For example, for equipment at sea, the cost of an update is satellite data bandwidth, so customers only want to upgrade a few times a year.

The pattern is often decided by customers and not by the technical team: for example by what customers can absorb, by contract terms, or by regulation. The squad takes the pattern as an input and builds its release path to suit it. The customer's expectations are recorded in the constraints of the [opportunity brief](01-opportunity-brief.md), so the pattern is known from the start.

Whatever the pattern, the practices below still apply.

## Practices

- **Production is off limits to agents by default.** Most companies are not comfortable with agents having direct access to production, and the framework does not assume it. So the automated verification an agent carries out during development does not happen in production.
- **No new data in production.** Nobody, agent or human, creates test data in a live system, because it changes the total data state of that system. The thorough checks, including the agent-run scenarios and any security probing, are done before release in a production-like environment.
- **Infrastructure changes:** deterministic policy checks on every plan, plus an agent summary of what the plan changes and what it risks. Policy checks block; the summary informs.
- **Post-deploy checks are read-only.** They observe the live system and change nothing: health, errors, performance, and the success measures from the brief. The automated ones are deterministic monitors set up in advance, not an agent acting on production. A person also looks at the feature in production, without creating data. Where the engineer cannot, this is handed off to someone who has access.
- **The signals are built in beforehand.** The monitors can only read what the feature emits. The logs, metrics, traces and alerts are built at [stage 4](04-build.md) and checked at [stage 5](05-verification.md), so by release they already exist.
- **The release-verifier watches the signals.** With read-only access to the observability data, not to production itself, it looks through the logs, metrics and traces for anything that does not look right. Where it can, it ties a finding back to the code and raises a tracked ticket for the engineer or squad who owns it. The ticket goes into the triage queue and not straight onto the backlog, so a person decides what to do with it. A ticket is a prompt to look and not a verdict, and an engineer decides what it means.
- **Automatic rollback:** if the monitors show a clear failure, the deployment is reverted through the same declarative path that deployed it.
- **Release notes and incident triage:** agent-drafted from information people give it, and human-reviewed.

## Human gate

Who approves a release depends on the pattern. In pattern A, the squad decides the release time together, and the engineer releasing owns the quality of the feature in production. In pattern B, a person decides when to release, for example the engineering manager and the product manager together, and the engineers still own the quality of their features in production. In pattern C, the release is approved at the scheduled point, and the squad owns its quality in production. In every pattern, a person decides go / no-go on ambiguous signals after release, and rollback on clear failure is automatic.

## Anti-patterns

- Agent summaries used as the only infrastructure gate
- Post-deploy checks that do not trace to the acceptance criteria or the success measures
- Giving an agent direct access to production
- Creating test data in a live system
- Tickets raised for every blip, so engineers learn to ignore them
- Copying sensitive data from the logs into tickets
