import { Hono } from 'hono';
import { setRenderer } from './set-renderer';

type Bindings = {
  [key in keyof CloudflareBindings]: CloudflareBindings[key]
}

const app = new Hono<{ Bindings: Bindings }>()

setRenderer(app)
app.get('/', (c) => {
  return c.render('Hello Hono!')
})

export default app