# Reproduce bug

## Install dependencies

```bash
yarn install
```

## Using build and start: OK

```bash
yarn build && yarn start
```

Visit `/`: OK.
Visit `/foo`: OK.

## Using dev server: 404

```bash
yarn dev
```

Visit `/`: OK.
Visit `/foo`: 404 despite the rewrite from `/foo` to `/`.

## Using rewrites declared in next.config.js

Edit `next.config.js`, use the in-file rewrite declaration.

Visit `/foo`: OK.
