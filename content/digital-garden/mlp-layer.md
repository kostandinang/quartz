---
title: MLP Layer
stage: sprout
tags:
  - ai
  - ml
---

After [[multi-head-attention|attention]], vectors go through an MLP (Multi-Layer Perceptron). This refines what each token learned.

Three steps:

**Expand** - Linear layer projects embeddings to larger space. Typically 4x bigger. 768 becomes 3072.

**Activate** - Non-linear function (usually GELU) decides what passes through. This is where complex patterns get computed.

**Project** - Linear layer brings it back to original size. 3072 back to 768.

Why expand then shrink? The temporary larger space gives room to compute complex transformations. Compression forces it to keep only what matters.

Think of it like taking notes. First you write everything down (expand), then you process it (activate), then you summarize the key points (project).

The MLP has the most parameters in each [[transformers-blocks|transformer block]]. It's where most of the "knowledge" lives.

### Related

- [[transformers-blocks|Transformer Blocks]]
- [[transformers-attention|Self-Attention]]
- [[residual-connections|Residual Connections]]
