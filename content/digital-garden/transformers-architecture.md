---
title: Transformers Architecture
stage: sprout
tags:
  - ai
  - ml
---

Transformers power every modern AI. GPT, Claude, Gemini - all built on the same foundation.

Introduced in 2017, the architecture changed everything. Not because it was complex. Because it was elegant.

The core question: **What's the most probable next token?**

Ask that billions of times and you get ChatGPT.

Three stages: [[token-embeddings|embeddings]], [[transformers-blocks|processing]], [[transformers-sampling|sampling]].

Text becomes numbers. Numbers flow through layers. Layers predict the next word. Repeat.

GPT-2 has 12 layers. Modern models have 100+. Each layer refines understanding. Low-level features become abstract reasoning.

The breakthrough was [[transformers-attention|self-attention]]. Every word can look at every other word. No forgetting like old RNNs.

This architecture scales. More data, more compute, more parameters. It keeps getting better.

But transformers just predict text. [[what-is-an-ai-agent|AI agents]] add planning, tools, and memory on top. The transformer is the brain. Agent architecture is the body.

### Related

- [[transformers-embeddings|Embeddings]]
- [[transformers-blocks|Transformer Blocks]]
- [[transformers-attention|Self-Attention]]
- [[transformers-sampling|Sampling]]
- [[what-is-an-ai-agent|What is an AI Agent]]
