---
title: Contributors
description: How to develop the docs site and ui-components library with Nx.
sidebar:
  order: 2
---

This starter is an [Nx](https://nx.dev) workspace with two projects:

| Path | Project | Purpose |
| ---- | ------- | ------- |
| `apps/docs` | `@astro-starlight-template/docs` | The Astro Starlight site |
| `packages/ui-components` | `@astro-starlight-template/ui-components` | Shared TypeScript helpers |

The `docs` app depends on `ui-components`, so Nx rebuilds the site whenever the
library changes.

## Prerequisites

- Node.js 22 or later

## Install

```bash
npm install
```

## Start the dev server

```bash
npx nx dev docs
```

Open [http://localhost:4321](http://localhost:4321).

## Build for production

```bash
npx nx build docs
```

Output is written to `apps/docs/dist/`.

## Run a task across every project

```bash
npx nx run-many -t build typecheck
```

## Build only what changed

```bash
npx nx affected -t build
```

Nx computes the project graph and skips anything untouched.

## Explore the project graph

```bash
npx nx graph
```

This opens an interactive visualization of all projects and their dependencies.

## Connect to Nx Cloud

Share your cache across machines and CI with remote caching and distributed
task execution:

```bash
npx nx connect
```

After connecting, every task result is cached remotely - teammates and CI reuse
builds instead of repeating them. See [https://cloud.nx.app](https://cloud.nx.app).
