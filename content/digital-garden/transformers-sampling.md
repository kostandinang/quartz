---
title: Transformer Sampling Strategies
stage: sprout
tags:
  - ai
  - ml
---

After all [[transformers-blocks|transformer blocks]], you have 50,000+ scores. One for each token in the vocabulary.

Now pick one. This choice shapes everything.

Pick the highest every time? Boring, repetitive text.

Pick randomly? Incoherent nonsense.

Sampling strategies find the balance.

[[temperature-sampling|Temperature]] controls randomness. Low temperature = focused and predictable. High temperature = creative and diverse.

[[top-p-sampling|Top-p]] adapts to the model's confidence. When it's sure, sample from few tokens. When it's uncertain, sample from many.

Combine them: Apply temperature, filter with top-p, sample from what remains.

Same [[transformers-architecture|architecture]], different sampling = different personality.

This is how you tune an agent's voice.

### Related

- [[temperature-sampling|Temperature Sampling]]
- [[top-p-sampling|Top-p Sampling]]
- [[transformers-architecture|Transformers Architecture]]
- [[agent-personas-and-system-prompts|Agent Personas]]
