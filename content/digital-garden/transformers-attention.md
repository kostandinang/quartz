---
title: Self-Attention Mechanism
stage: sprout
tags:
  - ai
  - ml
---

Self-attention is why transformers work.

It lets every word look at every other word and decide what matters.

Old models (RNNs) read left to right. Word by word. Like reading through a keyhole. By word 100, you've forgotten word 1.

Transformers see everything at once. Word 1 can talk to word 1000 directly.

The mechanism: [[query-key-value|Query, Key, Value]]. Each word asks "what am I looking for?" (Query), broadcasts "what do I contain?" (Key), and shares "what information do I carry?" (Value).

Queries compare with Keys. High similarity = high attention. Those scores weight the Values.

"Bank" near "river"? Attend to "river". "Bank" near "money"? Attend to "money". Same word, different context, different attention pattern.

Modern transformers use [[multi-head-attention|multiple heads]]. Each head learns different relationships. Grammar, semantics, long-range links - all in parallel.

### Related

- [[query-key-value|Query, Key, Value]]
- [[multi-head-attention|Multi-Head Attention]]
- [[transformers-architecture|Transformers Architecture]]
- [[transformers-blocks|Transformer Blocks]]
