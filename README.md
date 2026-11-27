# zawojski-dev

Personal portfolio site ([zawojski.dev](https://zawojski.dev)) built with React, TypeScript, Tailwind CSS and Vite, prerendered to static HTML at build time.

## Setup

Install dependencies with [Bun](https://bun.sh):

```sh
bun install
```

## Development

Start the Vite dev server:

```sh
bun run dev
```

## Checks

Run these before committing:

```sh
bun run lint   # oxlint
bun run build  # type check, client + SSR build, prerender to dist/
```

`bun run preview` serves the built `dist/` locally.
