## Reproduce bug

Start the dev server:

```
npm run dev
```

Open [http://localhost:3000/en/foo](http://localhost:3000/en/foo)

Rewrite should render `/` page when opening `/foo`.

From what I understood, it is not working since `rewrites()` is mutating the original object.

If we set the rewrite rule directly in `next.config.js` it works, since it creates a new instance of the array very time.
