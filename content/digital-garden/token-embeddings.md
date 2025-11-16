---
title: Token Embeddings
stage: sprout
tags:
  - ai
  - ml
---

Computers don't read text. They need numbers.

Token embeddings convert words into vectors - lists of numbers that capture meaning.

First, text gets split into tokens. "Hello world" becomes `["Hello", " world"]`. Notice the space is its own token.

Modern tokenizers use subwords. "unbreakable" might become `["un", "break", "able"]`. Helps with rare words the model never saw during training.

Each token maps to a vector. Typically 768 numbers for smaller models. 12,000+ for large ones.

These vectors live in a lookup table. Training teaches the model which numbers best represent each token. "king" ends up near "queen" in vector space. Math that captures meaning.

### Related

- [[transformers-embeddings|Transformer Embeddings]]
- [[positional-encoding|Positional Encoding]]
- [[transformers-architecture|Transformers Architecture]]
