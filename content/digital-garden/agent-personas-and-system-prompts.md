---
title: Agent Personas and System Prompts
stage: seed
tags:
  - ai
  - agent
  - prompting
---

A system prompt defines who the agent is and what it does.

This matters more than you think. A well-crafted persona shapes how the agent reasons, which tools it picks, and how it communicates.

Example: "You are a professional contract writer. Your role is to draft, review, and finalize legal documents. You have tools for reading documents, adding notes, and sending emails."

The persona should include:

- Role (what are you?)
- Responsibilities (what do you do?)
- Constraints (what don't you do?)
- Tools available (what can you use?).

Clear personas prevent confusion. Without one, the agent might try to do everything. With one, it knows its boundaries.

In multi-agent systems, personas become even more critical. Each agent needs a distinct role. Otherwise they step on each other's toes.

### Related

- [[what-is-an-ai-agent|What is an AI Agent]]
- [[single-vs-multi-agent-systems|Single vs Multi-Agent Systems]]
- [[prompt-engineering-for-agents|Prompt Engineering for Agents]]
