---
title: Positional Encoding
stage: sprout
tags:
  - ai
  - ml
---

Word order matters. "Dog bites man" vs "Man bites dog" - same words, different story.

But [[transformers-architecture|transformers]] process all words at once. They don't naturally know position.

Solution: add position information to each [[token-embeddings|embedding]].

**Learned Positional Embeddings**

GPT-2 uses this. Each position has its own learned vector. Position 1 has one vector, position 2 has another.

Token embedding + position embedding = final input.

Simple. Works well up to a fixed length.

**RoPE (Rotary Position Embedding)**

Newer models like LLaMA use this. Instead of adding position, they rotate the embedding vectors.

Position encoded through rotation angles. More elegant math. Better for long sequences.

If position encoding breaks, word order collapses. "Bank by the river" becomes meaningless soup.

### Related

- [[transformers-embeddings|Transformer Embeddings]]
- [[token-embeddings|Token Embeddings]]
- [[transformers-architecture|Transformers Architecture]]
