import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

app.get("/", (c) => {
  return c.render(
    <div class="min-h-screen">
      <div class="container mx-auto px-4 py-16">
        <div class="max-w-3xl mx-auto text-center space-y-8">
          <div class="animate-fade-in-down">
            <h1 class="text-5xl font-extrabold mb-4">
              letty
            </h1>
            <p class="text-xl">
              A typescript project template based on traditional web practices
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div class="card transition-all duration-300 transform hover:-translate-y-1">
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
              <div class="card transition-all duration-300 transform hover:-translate-y-1">
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

            <div class="card transition-all duration-300 transform hover:-translate-y-1">
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

          <div class="flex justify-center mt-12">
            <div class="flex gap-8">
              <button
                id="subtract"
                type="button"
                class="btn"
                onclick="count.value -= 1"
              >
                -1
              </button>
              <p id="count" class="text-3xl tabular-nums">2</p>
              <button
                id="add"
                type="button"
                class="btn"
                onclick="count.value += 1"
              >
                +1
              </button>
            </div>
          </div>
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
    </div>,
  );
});

export default app;
