import { Hono } from "hono";

const app = new Hono();

app.get("/api/date", (c) => {
  const date = Temporal.Now.plainDateISO().toString();
  return c.json({ date });
});

app.get("/api/stream", (_c) => {
  const lorem = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  `;

  const words = lorem.trim().split(/\s+/);
  const encoder = new TextEncoder();

  let cancelled = false;

  const stream = new ReadableStream({
    async start(controller) {
      for (const word of words) {
        if (cancelled) break;
        controller.enqueue(encoder.encode(word + " "));
        await new Promise((r) => setTimeout(r, 75));
      }
      controller.close();
    },
    cancel() {
      cancelled = true;
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-cache",
      "Transfer-Encoding": "chunked",
    },
  });
});

export default app;
