---
title: LangGraph and Agent Frameworks
stage: sprout
tags:
  - ai
  - agent
  - frameworks
  - langchain
---

Building agents from scratch is hard. Frameworks make it easier.

[LangGraph](https://www.langchain.com/langgraph) lets you build agents as state machines with nodes and edges. Each node is a function. Edges determine flow. You get control over exactly what happens when.

[LangChain](https://www.langchain.com/langchain) started as a way to chain LLM calls together. Now it supports full agent design with memory, planning, and tool execution.

[CrewAI](https://www.crewai.com/) focuses on multi-agent systems. You define a crew of specialized agents that work together.

These frameworks handle the common problems: managing conversation history, routing between tools, handling errors, maintaining state.

One way to build: Don't reach for a framework on day one. Build a simple agent first. Understand the patterns. Then use a framework to scale.

Frameworks add abstraction. Abstraction adds complexity. Make sure you need it before you use it.

### Related

- [[what-is-an-ai-agent|What is an AI Agent]]
- [[single-vs-multi-agent-systems|Single vs Multi-Agent Systems]]
- [[tool-use-in-ai-agents|Tool Use in AI Agents]]
