# Adoption

## Rollout

1. **Baseline (weeks 1 to 3).** Capture the metrics below. Write a short AI usage policy covering data, IP and accountability. Choose two pilot teams.
2. **Pilot (weeks 4 to 9).** Run the pilot teams through the stages, starting with acceptance criteria and independent verification. Compare against baseline.
3. **Roll out (weeks 10 to 13).** Extend to other teams and adapt for data work.

These timings are a starting point, not a promise.

## Where it applies

| Work | Where agents add most | Quality gate |
|---|---|---|
| Software | The full lifecycle | Tests, adversarial review, post-deploy checks |
| Data warehousing and ETL | Transformation code, data tests, lineage, documentation | Data contracts and reconciliation checks |

The principles apply to data warehousing and ETL work in the same way. The difference is usually the customer: it may be an internal team or other engineering teams who consume the data, not an end customer. The opportunity brief, the success measure and the unhappy paths all still apply, written from that customer's point of view. For example, the measure might be how many consuming teams can answer a question without asking for a special extract, and an unhappy path might be a consumer finding wrong or late data and needing to know who to raise it with.

## Where it does not apply

This framework is not designed for machine learning research. In research, validation is mathematical and the work is about discovering a capability, not delivering a product. Architecture, security testing and review practices differ accordingly, so applying a product-delivery lifecycle would mislead more than help. Teams doing research should use practices suited to it. Where an ML team ships a product built on that research, the product-delivery parts of this framework can apply to that product.

## People change

The hardest change is usually not tooling. Where a role has habitually produced solutions (for example, product writing architectures), a tool will not change the behaviour on its own. Agree decision rights at leadership level, show a concrete example of the cost, give people a legitimate channel for their influence, and only then change the templates so the old habit has nowhere to go.

## Metrics

See [metrics.md](metrics.md).
