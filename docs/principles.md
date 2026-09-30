# Principles

1. **Specs are the primary artefact.** An agent's output is only as good as the problem statement, acceptance criteria and repository context it is given.
2. **Verification is the throughput limit.** More code arrives faster, so review, tests and release gates must scale with it.
3. **The author is never the only tester.** The agent (or person) that wrote the code does not write the only tests, and a second model or session reviews it adversarially.
4. **Humans hold defined gates.** Spec approval, design decisions, merge and release are human decisions. Agents advise.
5. **Product owns the problem; engineering owns the solution.** Product states the customer problem, outcomes and constraints. Design is done together, with engineering accountable.
6. **Agents get context from the repository.** Conventions, architecture decisions and standards live in the repo, so every agent works from the same source.
7. **Small units of work.** Work sized to finish in one agent session is easier to specify, test and review.
8. **Measure before and after.** Baseline quality and flow, then compare. Claims without a baseline are opinions.
9. **Different work, different gates.** Software, ML and data work verify differently; see [adoption](adoption.md).
