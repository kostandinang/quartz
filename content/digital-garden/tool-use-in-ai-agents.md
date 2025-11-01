---
title: Tool Use in AI Agents
stage: sprout
tags:
  - ai
  - agent
---

Tools are what make agents useful. Without tools, an agent is just a chatbot.

A tool is any function the agent can call. Reading from a database. Sending an email. Running code. Fetching a web page. Updating a CRM. Creating a file.

The agent decides which tool to use based on its reasoning. Modern LLMs do this through function calling, the model outputs structured data specifying which tool and what parameters.

Good tool design matters. Each tool should have a clear purpose. Clear parameters.

The more tools an agent has, the more powerful it becomes. But also more complex. To prevent misuse, guardrails are needed.

### Related

- [[what-is-an-ai-agent|What is an AI Agent]]
- [[agent-architecture-components|agent-architecture-components]]
- [[function-calling-in-llms|Function Calling in LLMs]]
