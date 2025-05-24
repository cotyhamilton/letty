import { jsxRenderer } from "hono/jsx-renderer";

export default jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/styles.css" rel="stylesheet" />
        <link rel="icon" href="https://fav.farm/🕶️" />
        <title>letty</title>
        <meta
          name="description"
          content="A typescript project template based on traditional web practices"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
});
