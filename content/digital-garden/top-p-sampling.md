---
title: Top-p Sampling
stage: sprout
tags:
  - ai
  - ml
---

Top-p (nucleus sampling) keeps the smallest set of tokens whose cumulative probability exceeds p.

If p=0.9, keep tokens until their probabilities sum to 90%. Sample from those.

**Why it's adaptive:**

When one token dominates (90% probability), nucleus is tiny. Maybe 1-2 tokens. Model is confident.

When probabilities are spread (many at 5-10%), nucleus is large. Maybe 20+ tokens. Model is uncertain.

This adapts to the model's confidence. Confident? Be focused. Uncertain? Explore options.

**Compared to Top-k:**

Top-k uses a fixed window. Always keep exactly k tokens.

Problem: what if the top token already has 99% probability? You're keeping irrelevant options.

Top-p adjusts. When the model is sure, it narrows the choices. When it's not, it widens them.

Most modern LLMs use this. p=0.9 or p=0.95 typically.

Combine with [[temperature-sampling|temperature]] for fine control. Temperature sets randomness, top-p sets diversity.

### Related

- [[transformers-sampling|Sampling Strategies]]
- [[temperature-sampling|Temperature Sampling]]
- [[transformers-architecture|Transformers Architecture]]
