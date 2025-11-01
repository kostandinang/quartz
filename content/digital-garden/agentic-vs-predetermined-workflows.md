---
title: Agentic vs Predetermined Workflows
stage: sprout
tags:
  - ai
  - agent
  - workflows
---

Predetermined workflows follow a fixed path. If-then logic. Step 1, then step 2, then step 3. You code the entire sequence upfront.

They work well when the problem is stable and known. Fast. Predictable. Easy to test.

Agentic workflows let the AI decide what to do next. The agent reasons about the task. Chooses tools. Adjusts based on results. It has loops, reflection, and control structures.

This matters when you face complex, multi-step problems where the path isn't clear from the start. The agent figures it out as it goes.

Example: Instead of "fetch data → format it → send email", an agentic workflow might decide to fetch additional context, validate the data, realize something's wrong, fetch more data, then finally send a customized email.

The tradeoff: Agentic workflows are less predictable but more flexible. Predetermined workflows are reliable but delicate.

Use agentic when you need adaptability. Use predetermined when you need consistency.

### Related

- [[what-is-an-ai-agent|What is an AI Agent]]
- [[agent-planning-strategies|Agent Planning Strategies]]
- [[when-to-use-agents-vs-simple-llm-calls|When to Use Agents vs Simple LLM Calls]]
