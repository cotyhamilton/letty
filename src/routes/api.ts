import { Hono } from "hono";

const app = new Hono();

app.get("/api/date", (c) => {
  const date = Temporal.Now.plainDateISO().toString();
  return c.json({ date });
});

export default app;
