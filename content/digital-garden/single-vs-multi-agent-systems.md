---
title: Single vs Multi-Agent Systems
stage: sprout
tags:
  - ai
  - agent
  - architecture
---

Single agents work alone. One LLM. One system prompt. One set of tools. They handle everything themselves.

This works great when problems are well-defined and you don't need collaboration. Simpler to build. Easier to debug. More predictable.

Multi-agent systems use multiple agents working together. Each has a specific role. They communicate. They coordinate. Like a team where everyone has their specialty.

You need multi-agent when tasks require different expertise or multiple execution paths. Example: One agent screens leads, another drafts emails, a third updates the CRM.

The tradeoff is complexity. Multi-agent systems need good communication protocols. Clear task division. Sometimes a leader agent to coordinate.

Here's the key insight: Start single-agent until you can't. Most problems don't need the complexity of multiple agents.

### Related

- [[agent-architecture-types|Agent Architecture Types]]
- [[what-is-an-ai-agent|What is an AI Agent]]
- [[agent-communication-patterns|Agent Communication Patterns]]
