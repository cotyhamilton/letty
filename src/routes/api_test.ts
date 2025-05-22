import { assert, assertMatch } from "@std/assert";
import app from "./api.ts";

Deno.test("GET /api/date", async () => {
  const response = await app.request("/api/date");
  const data = await response.json();
  assert(data.date);
  assertMatch(data.date, /^\d{4}-\d{2}-\d{2}$/); // YYYY-MM-DD
});
