import { Hono } from "hono";
import { jsxRenderer } from "hono/jsx-renderer";
import { Bindings } from "hono/types";

export function setRenderer(app: Hono<{ Bindings: Bindings }>) {
  app.use(
    "*",
    jsxRenderer(
      ({ children }) => (
        <html lang="ja">
          <head>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <title>Document</title>
          </head>
          <body>
            <h1>app</h1>
            {children}
          </body>
        </html>
      ),
      {
        docType: true,
      },
    ),
  );
}