import { Hono } from "hono";
import { html } from "hono/html";
import HelloAlert from "../components/hello-alert.tsx";
import Navbar from "../components/navbar.tsx";

const app = new Hono();

app.get("/", (c) => {
  const name = c.req.query("name") || "";

  return c.render(
    <>
      <Navbar />
      <div class="min-h-screen">
        {name && <HelloAlert name={name} />}

        <div class="container mx-auto px-4 py-16">
          <div class="max-w-3xl mx-auto text-center space-y-8">
            <h1 class="text-5xl font-extrabold mb-4">
              letty
            </h1>
            <p class="text-xl">
              A typescript project template based on traditional web practices
            </p>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div class="card">
                <header>
                  <div class="text-4xl mb-4">🦕</div>
                  <h2 class="text-xl font-bold mb-2">Deno</h2>
                </header>
                <section>
                  <a href="https://deno.com" class="btn-secondary">
                    https://deno.com
                  </a>
                </section>
              </div>

              <div>
                <div class="card">
                  <header>
                    <div class="text-4xl mb-4">🔥</div>
                    <h2 class="text-xl font-bold mb-2">Hono</h2>
                  </header>
                  <section>
                    <a href="https://hono.dev" class="btn-secondary">
                      https://hono.dev
                    </a>
                  </section>
                </div>
              </div>

              <div class="card">
                <header>
                  <div class="text-4xl mb-4">🎨</div>
                  <h2 class="text-xl font-bold mb-2">Basecoat</h2>
                </header>
                <section>
                  <a href="https://basecoatui.com" class="btn-secondary">
                    https://basecoatui.com
                  </a>
                </section>
              </div>
            </div>

            <div class="mt-12 space-y-4">
              <p>
                Get started by modifying{" "}
                <code class="px-2 py-1 rounded bg-muted">
                  src/routes/index.tsx
                </code>
              </p>
            </div>

            <hr />

            <h2 class="text-3xl font-bold mb-6">vanilla js</h2>
            <div class="flex justify-center mt-12">
              <div class="flex gap-8">
                <button
                  id="subtract"
                  type="button"
                  class="btn"
                >
                  -1
                </button>
                <p id="count" class="text-3xl tabular-nums">2</p>
                <button
                  id="add"
                  type="button"
                  class="btn"
                >
                  +1
                </button>
              </div>
            </div>

            <hr />

            <h2 class="text-3xl font-bold mb-6">form handling</h2>
            <div class="mt-12">
              <div class="card p-6 max-w-md mx-auto">
                <form action="/" method="post" class="form grid gap-6">
                  <div class="grid gap-2">
                    <label for="name">
                      Enter your name:
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                    />
                  </div>
                  <button type="submit" class="btn">Submit</button>
                </form>
              </div>
            </div>

            <hr />

            <h2 class="text-3xl font-bold mb-6">api routes</h2>
            <div class="mt-12">
              <button
                id="getDate"
                type="button"
                class="btn"
              >
                get data from <pre>/api/date</pre>
              </button>
              <pre
                id="dateText"
                class="text-start border bg-muted p-4 mt-8 rounded min-h-12"
              >{`// placeholder`}</pre>

              {html`
                <script type="module">
                const dateButton = document.getElementById("getDate");
                const dateText = document.getElementById("dateText");

                dateButton.addEventListener("click", async () => {
                  const response = await fetch("/api/date");
                  const data = await response.json();
                  dateText.textContent = JSON.stringify(data, null, 2);
                });
                </script>
              `}
            </div>

            <hr />
          </div>
        </div>

        {html`
          <script type="module">
          const addButton = document.getElementById("add");
          const subtractButton = document.getElementById("subtract");
          const count = document.getElementById("count");

          addButton.addEventListener("click", () => {
            count.textContent = +count.textContent + 1;
          });

          subtractButton.addEventListener("click", () => {
            count.textContent = +count.textContent - 1;
          });
          </script>
        `}
      </div>
    </>,
  );
});

app.post("/", async (c) => {
  const formData = await c.req.parseBody();
  const name = formData.name as string;
  return c.redirect(`/?name=${encodeURIComponent(name)}`);
});

export default app;
