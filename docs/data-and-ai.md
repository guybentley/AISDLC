# Data and AI work

The six stages and the six principles apply to data and AI work as they do to software. This page says what is different at each stage. It does not name tools, so a squad uses whichever it already has.

## What stays the same

- The customer may be internal. For a data product the customer is often another team that consumes the data. The brief, the success measure and the unhappy paths are written from their point of view.
- Production is off limits to agents, and nobody creates data in a live system. This matters more here, because test data in a live data store or a live AI product changes what real users and downstream teams see.
- Checks are done in a production-like environment, with masked or synthetic data. Real personal data is not copied into test environments or into prompts without the same protection it has in production.
- Machine learning research is outside this lifecycle. See [adoption](adoption.md#research-and-delivery).

## Data work

Data warehousing, pipelines and ETL.

| Stage | What is different |
|---|---|
| 1. Opportunity brief | The customer is usually a team that consumes the data. A good measure is whether they can answer their question without a special extract. Unhappy paths include wrong or late data, and who the consumer raises it with. |
| 2. Design workshop | The design names who owns each dataset, how fresh it must be, how big it will get, and the data contract between producer and consumer. The context pack includes existing datasets and lineage. |
| 3. Stories and sizing | Acceptance criteria are written as checks on the data: freshness, row counts, uniqueness, reconciliation against the source, and what happens to bad records. |
| 4. Build | The agents write the transformation code, the data tests, the lineage and the documentation. A backfill is planned as part of the story, not left until release. The pipeline emits freshness, volume and quality signals. |
| 5. Verification | The reviewing engineer reconciles the output against the source, and looks at the real output as a consumer would, without a script. The completeness check includes the data tests and the signals. |
| 6. Release | Data is harder to undo than code. Reverting the code does not undo what the pipeline already wrote, so the release plan says how bad data is found, corrected or restored. Read-only monitors watch freshness, volume and quality. A change to a data contract is announced to the consumers before it goes live. |

## AI products

Products where a model, prompt or agent produces the behaviour the customer sees.

| Stage | What is different |
|---|---|
| 1. Opportunity brief | The measure is in the customer's terms, such as tasks completed or questions answered correctly. Unhappy paths cover wrong answers, refusals and harmful output, and how the customer reaches a person. |
| 2. Design workshop | The design-attacker looks at misuse as well: prompt injection, leaking data into or out of the model, and what the product does when the model is wrong. The design says where a person stays in the loop. |
| 3. Stories and sizing | Acceptance criteria describe behaviour and are backed by an evaluation set of example cases, because the same input can give different outputs. A criterion may say how often it must be right, not that it is always right. |
| 4. Build | Prompts, model choice and configuration are kept under version control like code. The separate test author builds the evaluation set, kept apart from whatever is used to tune the product, so the product is not marked on questions it has already seen. The security agent covers prompt injection and sensitive data sent to a model. |
| 5. Verification | The evaluation is run, and agents that simulate a user talk to the product while another agent checks the result against the acceptance criteria, as described in [adoption](adoption.md#where-it-applies). The adversarial review uses a different model where the budget allows. The reviewing engineer also uses the product freely, as a customer would. Evaluation results are recorded as evidence and not set as targets. |
| 6. Release | Changing the model, the prompt or the provider is a release, even when no code changes. A product can get worse without any change at all, as the model or the data around it shifts, so read-only monitors watch the quality signals. The simulated users run before release, in a production-like environment, never against the live product. Quality signals are often ambiguous, so a person decides. Rolling back means returning to the previous prompt or model version. |

## Anti-patterns

- Judging an AI product on example cases the product was tuned on
- Treating an evaluation score as a target, so people learn to push it up without improving the product
- Changing a model or prompt without treating it as a release
- Reverting the code after a data release and assuming the data is fixed
- Copying real personal data into test environments or prompts
