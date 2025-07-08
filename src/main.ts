import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { csrf } from "hono/csrf";
import { serveStatic } from "hono/deno";
import { logger } from "hono/logger";
import { trace } from "@opentelemetry/api";
import index from "./app.tsx";
import routes from "./routes/mod.ts";

const app = new Hono();

app.use(csrf());
app.use(logger());
app.use(index);

app.use(async (c, next) => {
  const span = trace.getActiveSpan();
  for (const [key, value] of c.req.raw.headers.entries()) {
    span?.setAttribute(`http.request.header.${key.toLowerCase()}`, value);
  }
  await next();
  span?.setAttribute("http.route", c.req.routePath);
});

app.use("*", serveStatic({ root: "./static" }));
app.route("/", routes);

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    console.error("HTTPException", err);
    return c.json({ error: err.message }, err.status);
  }

  if (err instanceof Error) {
    console.error(err);
    return c.json({ error: err.message }, 500);
  }

  return c.text("Internal Server Error", 500);
});

export default app;
