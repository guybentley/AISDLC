# Stage 6: Release

- **Human owner:** On-call / release owner
- **Agents:** [release-verifier](../../agents/release-verifier.md)
- **Output:** a verified release or an automatic rollback

## Purpose

Releasing frequently is only safe if problems are caught quickly. Move safety checks to after the merge as well as before it.

## Practices

- **Infrastructure changes:** deterministic policy checks on every plan, plus an agent summary of what the plan changes and what it risks. Policy checks block; the summary informs.
- **Post-deploy checks:** synthetic checks derived from the acceptance criteria run against the live system.
- **Automatic rollback:** if checks fail, the deployment is reverted through the same declarative path that deployed it.
- **Release notes and incident triage:** agent-drafted, human-reviewed.

## Human gate

The release owner decides go / no-go on ambiguous signals. Rollback on clear failure is automatic.

## Anti-patterns

- Agent summaries used as the only infrastructure gate
- Post-deploy checks that do not trace to acceptance criteria
