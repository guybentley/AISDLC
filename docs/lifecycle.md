# Lifecycle overview

```
Opportunity brief -> Design workshop -> Stories & sizing -> Build -> Verification -> Release
   (Product)           (Product +          (Product +         (Engineer)  (Review and      (On-call)
                        Platform +          Engineering)                    manual test)
                        Software)
```

## The thread

Acceptance criteria written in stage 3 are read by:

- the **test author** (stages 3 and 4), to check the criteria can be tested, to draft scenarios, and to build the automated tests
- the **adversarial reviewer** (stage 4), to judge the change against the story
- the **reviewing engineer** (stage 5), to test the feature by hand against them
- the **release verifier** (stage 6), to build post-deploy checks

If the criteria are weak, all of these are weak. Investment in stages 1 to 3 pays back at the end.

## Human gates

| After | Gate | Decided by |
|---|---|---|
| Stage 1 | Brief is an opportunity statement, ready for the workshop | Product manager, after the brief-coach's independent review |
| Stage 2 | Design note accepted | The squad, after the challenger's and design-attacker's independent reviews |
| Stage 3 | Stories accepted (scope, priority, acceptance criteria); estimates and sizes accepted | Product for the stories; engineering for the estimates, after the right-size-checker's review. Then the readiness-checker confirms every story is estimated and has acceptance criteria before it moves to build |
| Stage 4 | Pull request opened | Owning engineer |
| Stage 5 | Merge | The reviewing engineer, after the verification-checker confirms everything is in place |
| Stage 6 | Go / no-go on ambiguous signals | Release owner |
