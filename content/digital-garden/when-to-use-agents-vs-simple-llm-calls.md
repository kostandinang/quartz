---
title: When to Use Agents vs Simple LLM Calls
stage: sprout
tags:
  - ai
  - agent
  - llm
---

Not everything needs an agent.

Use a simple LLM call when you have a one-shot task. Answer a question. Write some text. Translate something. No planning needed. No tools required.

Use an agent when you need any of these: memory across sessions, tool use, multi-step reasoning, adaptability, reflection and improvement.

The rule I follow: If I can write the logic as a clear sequence of steps, I don't need an agent. If the path depends on intermediate results or uncertain outcomes, I probably do.

Agents add overhead. They're slower. More expensive. Harder to debug. They can fail in unexpected ways.

But when you need them, they're powerful. They turn your LLM from a text generator into a system that can actually do things.

Start simple. Add agency when you need it.

### Related

- [[what-is-an-ai-agent|What is an AI Agent]]
- [[agentic-vs-predetermined-workflows|Agentic vs Predetermined Workflows]]
- [[agent-architecture-components|agent-architecture-components]]
