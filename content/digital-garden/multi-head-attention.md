---
title: Multi-Head Attention
stage: sprout
tags:
  - ai
  - ml
---

One [[query-key-value|attention mechanism]] is limiting. It can only capture one type of relationship.

So we split into multiple heads. 8 to 16 typically.

Each head gets its own smaller set of Q/K/V projections. They run in parallel.

**Why multiple heads matter:**

- Head 1 might focus on grammar (subject-verb agreement)
- Head 2 might track long-range dependencies
- Head 3 might capture semantic meaning
- Head 4 might notice syntax patterns

Same input, different learned patterns. Richer understanding.

After all heads compute their attention, we concatenate results. Then project back to the original embedding size.

More heads = more ways to understand relationships. But also more compute.

Modern models balance this. Enough heads to capture complexity, not so many that training becomes impossible.

### Related

- [[transformers-attention|Self-Attention Mechanism]]
- [[query-key-value|Query, Key, Value]]
- [[transformers-blocks|Transformer Blocks]]
