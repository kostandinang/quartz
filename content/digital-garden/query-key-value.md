---
title: Query, Key, Value
stage: sprout
tags:
  - ai
  - ml
---

[[transformers-attention|Self-attention]] works through three transformations: Query, Key, Value.

Same word, three different projections.

**Query** - "What am I looking for?"
**Key** - "What do I contain?"
**Value** - "What information do I carry?"

Think of it like a database:
- Query: your search
- Key: the index
- Value: the actual data

Each [[token-embeddings|token embedding]] gets multiplied by three different learned weight matrices. This creates Q, K, and V.

Queries compare against all Keys through dot products. High similarity = high attention score.

Those scores weight the Values. Words gather information from words they're related to.

"Bank" near "river"? The Query for "bank" matches strongly with the Key for "river". So "bank" incorporates Value information from "river". Now the model knows which kind of bank.

This mechanism is learned, not programmed. Billions of examples teach it which connections matter.

### Related

- [[transformers-attention|Self-Attention Mechanism]]
- [[multi-head-attention|Multi-Head Attention]]
- [[transformers-architecture|Transformers Architecture]]
