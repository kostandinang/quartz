---
title: Transformer Embeddings
stage: sprout
tags:
  - ai
  - ml
---

Before [[transformers-architecture|transformers]] can process text, they convert it to numbers.

Two parts: [[token-embeddings|token embedding]] and [[positional-encoding|positional encoding]].

Token embedding maps words to vectors. "king" becomes a list of numbers that sits near "queen" in vector space. Math that captures meaning.

Positional encoding adds location information. First word, second word, third word. Without this, the model can't tell "dog bites man" from "man bites dog".

Combined, they create the input: what each word means and where it sits.

These embeddings flow into [[transformers-blocks|transformer blocks]] where the real processing happens.

Good embeddings are everything. If similar words don't cluster together, transfer learning breaks. If position encoding fails, word order collapses.

### Related

- [[token-embeddings|Token Embeddings]]
- [[positional-encoding|Positional Encoding]]
- [[transformers-architecture|Transformers Architecture]]
- [[transformers-blocks|Transformer Blocks]]
