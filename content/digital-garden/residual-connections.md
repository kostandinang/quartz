---
title: Residual Connections
stage: sprout
tags:
  - ai
  - ml
---

Here's a clever trick: add the input to the output.

`output = layer(input) + input`

Seems simple. Changes everything.

Without residuals, gradients vanish after 10-20 layers. Information fades. Learning stops. You can't train deep networks.

With residuals, information has a highway straight through the network. Each layer adds deltas, not replacements.

Think of it like editing a document. Without residuals, you rewrite everything each time. With residuals, you make small changes to the existing text.

This lets [[transformers-blocks|transformers]] stack 100+ blocks. Each block refines the representation slightly. The original signal never gets lost.

Gradients flow backward through the network during training. The residual path prevents them from shrinking to zero.

Small detail. Huge impact on what's possible.

### Related

- [[transformers-blocks|Transformer Blocks]]
- [[mlp-layer|MLP Layer]]
- [[transformers-architecture|Transformers Architecture]]
