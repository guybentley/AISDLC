# Principles

1. **Engineers and agents work as a pair.** The agent brings speed and breadth; the engineer brings context, judgment and accountability. Neither works alone at any stage, and the engineer decides.
2. **Specs are the primary artefact.** An agent's output is only as good as the problem statement, acceptance criteria and repository context it is given.
3. **Verification is the throughput limit.** Code is written faster, so review, tests and release gates must scale with it.
4. **The author is never the only tester.** The agent (or person) that wrote the code does not write the only tests, and a second model or session reviews it adversarially.
5. **Humans hold defined gates.** Spec approval, design decisions, merge and release are human decisions. Agents advise.
6. **Product owns the problem; engineering owns the solution.** Product states the customer problem, outcomes and constraints. Design is done together, with engineering accountable.
7. **Agents get context from the repository.** Conventions, architecture decisions and standards live in the repo, so every agent works from the same source.
8. **Small units of work.** Work sized to finish in one agent session is easier to specify, test and review.
9. **Measure before and after.** Baseline quality and flow, then compare. Claims without a baseline are opinions.
10. **Different work, different gates.** Software, ML and data work verify differently; see [adoption](adoption.md).
