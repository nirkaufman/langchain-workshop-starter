import { createAgent, initChatModel } from "langchain";

// The model: the brain of your agent.
const model = await initChatModel("openai:gpt-5.4-mini");

// The agent: you will grow this into a multi-agent Content Factory today.
export const agent = createAgent({ model });
