# LangChain Workshop · Starter

Your starting point for the one-day LangChain workshop (TypeScript).
It is one agent in one file. By the end of the day it is a multi-agent **Content Factory**.

**Exercises and instructions: <https://langchain-workshop-website.vercel.app>**

## Setup (5 minutes)

You need Node.js 20.16 or later (`node --version`).

```bash
git clone https://github.com/nirkaufman/langchain-workshop-starter.git
cd langchain-workshop-starter
npm install
cp .env.example .env      # then paste your keys into .env
npm run dev
```

`npm run dev` starts the LangGraph dev server and prints a **Studio UI** link.
Open it (sign in with your free LangSmith account), pick the `agent` graph, and say hello.

## Keys you need

| Key | Where to get it | Used for |
|---|---|---|
| `OPENAI_API_KEY` | <https://platform.openai.com/api-keys> | the model (`gpt-5.4-mini`) |
| `TAVILY_API_KEY` | <https://app.tavily.com> (free tier) | web search |
| `LANGSMITH_API_KEY` | <https://smith.langchain.com> → Settings → API Keys (free) | Studio, tracing, prompt hub |

## What's inside

```
src/agent.ts      ← the only file. You will grow it all day.
langgraph.json    ← tells the dev server (and Studio) which graphs to load
package.json      ← every dependency for the whole day is already installed
```

## Troubleshooting

- **Studio says "Failed to fetch"**: open the exact Studio link `npm run dev` prints (it uses `localhost`, not
  `127.0.0.1`). Safari blocks `localhost`: use Chrome, Edge or Firefox, or run `npm run dev -- --tunnel`.
- **`401` / `Incorrect API key`**: check `.env` (no quotes, no spaces around `=`), then restart `npm run dev`.
- **`npm install` fails**: check `node --version` is 20.16 or later.
