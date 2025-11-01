---
title: Memory Retention and Decay
stage: sprout
tags:
  - ai
  - agent
---

Agent memory shouldn't last forever.

Without decay, memory gets bloated. Old information crowds out new. Retrieval gets slower. Irrelevant stuff contaminates.

Some approaches:

- Time-based decay (old memories fade)
- Recency weighting (prioritize recent information)
- Importance scoring (keep what matters most)
- Explicit deletion (let users remove memories)

Do you need to remember a customer's question from three years ago? Probably not. But their preferences from last month? Yes.

The challenge is deciding what to forget. Too aggressive and you lose valuable context. Too conservative and performance degrades.

I think the best approach is letting users control their memory. Give them visibility. Let them delete. Set reasonable defaults but allow customization.

Memory should serve the user, not overload the system.

### Related

- [[agent-memory-systems|Agent Memory Systems]]
- [[vector-databases-for-agent-memory|Vector Databases for Agent Memory]]
- [[agent-privacy-considerations|Agent Privacy Considerations]]
