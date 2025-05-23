import { Hono } from "hono";
import { csrf } from "hono/csrf";
import { serveStatic } from "hono/deno";
import { trace } from "@opentelemetry/api";
import index from "./app.tsx";
import routes from "./routes/mod.ts";

const app = new Hono();

app.use(csrf());
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

export default app;

// for now, this is a hack for deno deploy v2
// deno run -RN src/main.ts --run
if (import.meta.main) {
  if (Deno.args.includes("--run")) {
    Deno.serve(app.fetch);
  }
}
