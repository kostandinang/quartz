---
title: Temperature Sampling
stage: sprout
tags:
  - ai
  - ml
---

Temperature controls randomness in text generation.

Before converting logits to probabilities, divide by temperature.

**Low temperature (0.1 to 0.7)**

Makes the distribution sharper. High scores get higher, low scores get lower.

The model becomes more confident. More predictable. More focused.

Good for: factual answers, code generation, anything where you want reliability.

**High temperature (1.0 to 2.0)**

Flattens the distribution. Makes unlikely tokens competitive.

The model becomes more exploratory. More creative. Sometimes weird.

Good for: brainstorming, creative writing, exploring possibilities.

**Temperature = 1.0**

No change. Use the model's raw probabilities.

I've found that 0.7 works for most tasks. High enough for variety, low enough for coherence.

Temperature is the model's voice. Same [[transformers-architecture|architecture]], different personality.

### Related

- [[transformers-sampling|Sampling Strategies]]
- [[top-p-sampling|Top-p Sampling]]
- [[transformers-architecture|Transformers Architecture]]
