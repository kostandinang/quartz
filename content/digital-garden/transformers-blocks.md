---
title: Transformer Blocks
stage: sprout
tags:
  - ai
  - ml
---

A transformer block is the core processing unit. Stack them deep and intelligence emerges.

GPT-2 has 12 blocks. GPT-3 has 96. Modern models push past 100.

Each block does two things: [[transformers-attention|attention]], then [[mlp-layer|refinement]].

Attention lets words exchange information. "Bank" gathers context from "river".

The MLP refines what each word learned. Expands to a larger space, processes, compresses back.

Between layers: [[residual-connections|residual connections]]. Add the input to the output. This prevents information from fading through 100+ layers.

Also: layer normalization. Keeps numbers stable. Dropout during training. Makes it robust.

One block captures simple patterns. Ten blocks capture sentence structure. A hundred blocks? Abstract reasoning across paragraphs.

Each layer builds on the last. That's the transformer's secret. Not complexity. Depth.

### Related

- [[transformers-attention|Self-Attention]]
- [[mlp-layer|MLP Layer]]
- [[residual-connections|Residual Connections]]
- [[transformers-architecture|Transformers Architecture]]
