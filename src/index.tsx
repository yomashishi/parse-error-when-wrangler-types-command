import { Hono } from 'hono';
import { jsxRenderer } from 'hono/jsx-renderer';

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key]
}

const app = new Hono<{ Bindings: Bindings }>()

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
app.get('/', (c) => {
  return c.render('Hello Hono!')
})

export default app