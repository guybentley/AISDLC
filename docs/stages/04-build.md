# Stage 4: Build

- **Human owner:** The engineer who owns the pull request
- **Agents:** a coding agent of your choice
- **Output:** a pull request

## Purpose

An engineer directs a coding agent to implement a right-sized story.

## Requirements

- **Repository context.** Each repository holds an agent instruction file, architecture decisions and conventions so the agent works from the same standards as the team. Keep shared standards in one file that multiple tools can read.
- **Small pull requests.** One story, one reviewable change.
- **The engineer owns the result.** "The agent wrote it" is never a defence.

## Human gate

The engineer opens the pull request only when they would be comfortable defending every line.

## Anti-patterns

- Large agent-generated pull requests nobody reads
- Agent instructions that differ between repositories for no reason
- The same agent session writing both code and the only tests
