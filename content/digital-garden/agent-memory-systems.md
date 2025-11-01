---
title: Agent Memory Systems
stage: sprout
tags:
  - ai
  - agent
---

Agents need memory to work well. Without it, they forget everything after each conversation.

There are two types: working memory and persistent memory.

Working memory is short-term. Like RAM in your computer. It holds the current conversation, the active task, what's happening right now. When the session ends, it's gone.

Persistent memory is long-term. It survives across sessions. This is where agents remember your preferences, past conversations, previous decisions. This is what makes an agent feel like it knows you.

The trick is using vector databases. They store information as embeddings, numbers that capture meaning. When the agent needs something, it searches by semantic similarity, not exact keywords.

### Related

- [[vector-databases-for-agent-memory|Vector Databases for Agent Memory]]
- [[what-is-an-ai-agent|What is an AI Agent]]
- [[agent-architecture-components|agent-architecture-components]]
