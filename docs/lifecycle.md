# Lifecycle overview

```
Opportunity brief -> Design workshop -> Stories & sizing -> Build -> Verification -> Release
   (Product)           (Product +          (Product +         (Engineer)  (Independent     (On-call)
                        Platform +          Engineering)                    tests + review)
                        Software)
```

## The thread

Acceptance criteria written in stage 3 are read by:

- the **test author** (stage 5), to write independent tests
- the **adversarial reviewer** (stage 5), to judge the change against the spec
- the **release verifier** (stage 6), to build post-deploy checks

If the criteria are weak, all three are weak. Investment in stages 1 to 3 pays back at the end.

## Human gates

| After | Gate | Decided by |
|---|---|---|
| Stage 1 | Brief is an opportunity statement, ready for the workshop | Product manager, after the brief-coach's independent review |
| Stage 2 | Design note accepted | Engineering, with product confirming |
| Stage 3 | Breakdown, size, scope | Engineering and product |
| Stage 4 | Pull request opened | Owning engineer |
| Stage 5 | Merge | Reviewer with merge authority |
| Stage 6 | Go / no-go on ambiguous signals | Release owner |
