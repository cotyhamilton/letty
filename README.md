# letty

A typescript project template based on traditional web practices

https://letty.cotyhamilton.deno.net/

## features

- SSR via JSX templating
- Client-side javascript
- Tailwind + shadcn/ui styles

## getting started

Run the development server

```bash
deno task dev
```

Test

```bash
# unit tests
deno test
# e2e tests
deno run -A npm:playwright install --with-deps
deno task test:e2e
```

Serve production

```bash
deno serve -R=./static src/main.ts
```

Container

```bash
docker build -t letty .
docker run -p 8000:8000 letty
```

- [deno](https://deno.com/)
  - typescript runtime
- [hono](https://hono.dev/)
  - web framework
- [basecoat](https://basecoatui.com/)
  - css only shadcn/ui style components
