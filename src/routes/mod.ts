import { Hono } from "hono";
import Index from "./index.tsx";
import Api from "./api.ts";

const app = new Hono();

app.route("/", Index);
app.route("/", Api);

export default app;
