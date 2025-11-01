---
title: Vector Databases for Agent Memory
stage: sprout
tags:
  - ai
  - agent
  - memory
  - databases
---

Vector databases are how agents remember things across conversations.

Every piece of information gets converted into an embedding, a list of numbers representing its meaning. Similar concepts end up close together in this high-dimensional space.

When the agent needs to recall something, it searches for semantic similarity. It doesn't need exact matches.

Popular options:

- FAISS (fast, local, open-source),
- ChromaDB (easy, flexible),
- Pinecone (managed, scalable),
- Milvus (powerful indexing),
- Redis (fastest performance).

The challenge is that embeddings are static snapshots. They don't update automatically when the underlying information changes. And similarity doesn't always mean relevance, the closest match might not be the most useful one.

Still, without vector storage, your agent is like someone with amnesia. It starts from zero every time.

### Related

- [[agent-memory-systems|Agent Memory Systems]]
- [[semantic-search-vs-keyword-search|Semantic Search vs Keyword Search]]
- [[embedding-models|Embedding Models]]
