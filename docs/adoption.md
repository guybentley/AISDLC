# Adoption

## Rollout

1. **Baseline (weeks 1 to 3).** Capture the metrics below. Write a short AI usage policy covering data, IP and accountability. Choose two pilot squads.
2. **Pilot (weeks 4 to 9).** Run the pilot squads through all six stages, delivering a real package of features or a product to market. The stages depend on each other, so a pilot needs the whole lifecycle to be a fair test. Compare against the baseline.
3. **Roll out (weeks 10 to 13).** Extend to other squads and adapt for data work.

These timings are a starting point, not a promise.

## Where it applies

| Work | Where agents add most | Quality gate |
|---|---|---|
| Software | The full lifecycle | Tests, adversarial review, post-deploy checks |
| AI products and projects | The full lifecycle | The same as software, plus agents that simulate user interaction (agent-to-agent simulated testing) |
| Data warehousing and ETL | Transformation code, data tests, lineage, documentation | Data contracts and reconciliation checks |

For AI products and projects, the quality gate is the same as for software. On top of it, one agent can play the part of a user and talk to the product the way a customer would, while another agent watches and checks the result against the acceptance criteria. This tests how the product behaves in conversation, which fixed test cases tend to miss.

The principles apply to data warehousing and ETL work in the same way. The difference is usually the customer: it may be an internal team or other engineering teams who consume the data, not an end customer. The opportunity brief, the success measure and the unhappy paths all still apply, written from that customer's point of view. For example, the measure might be how many consuming teams can answer a question without asking for a special extract, and an unhappy path might be a consumer finding wrong or late data and needing to know who to raise it with.

## Research and delivery

Anything that results in a delivered product is in scope, including AI products and projects.

Machine learning research is different. Its result is a capability, such as a new model or technique, and not a product. Its validation is mathematical, and its architecture, security testing and review practices differ accordingly, so this lifecycle is not designed for the research itself. Teams doing research should use practices suited to it.

When a capability is ready to be used, it enters this lifecycle like any other input to delivery. A capability on its own is not a customer opportunity, so the lifecycle starts with the opportunity it makes possible, at stage 1.

## People change

Changing how people work is as big a change as changing the tools, and it needs the same care. Every role's work shifts a little. Product managers work with an agent from the first brief and facilitate the design workshop. Engineers direct agents, review their work, and now and then do the work themselves with an agent reviewing. The test author joins the squad when stories are refined. Nobody's purpose changes, but how they spend their time does.

What helps:

- **Say what changes for each role,** in plain terms, before the first pilot.
- **Let squads learn by doing.** Start with squads that want to, and use what they learn to help the next ones.
- **Give people room to practise,** including the role swaps in principle 1, so skills stay sharp and the work still feels like theirs.
- **Agree at leadership level how decisions are made,** so squads own their solutions and nobody is unsure who decides what.
- **Make the new way the easy way.** The templates and agents should make the right habit the path of least effort.

## Metrics

See [metrics.md](metrics.md).
