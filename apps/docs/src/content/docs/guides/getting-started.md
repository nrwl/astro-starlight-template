---
title: Getting Started
description: Install and use the ui-components utility library in your docs site.
sidebar:
  order: 1
---

:::note
Working on the starter itself? See the [Contributors guide](/guides/contributors/)
for the Nx workflow, local commands, and Nx Cloud setup.
:::

`@astro-starlight-template/ui-components` is a small, typed collection of helpers
for building documentation pages - slugs, dates, reading-time estimates, and
sidebar sorting.

## Install

It is already wired into the `docs` app of this workspace. To use it elsewhere,
add it as a dependency:

```json
// package.json
{
  "dependencies": {
    "@astro-starlight-template/ui-components": "*"
  }
}
```

## Import a helper

```ts
import {
  slugify,
  formatDate,
  readingTime,
} from '@astro-starlight-template/ui-components';

const slug = slugify('My Awesome Page');       // -> "my-awesome-page"
const date = formatDate('2024-01-15');          // -> "January 15, 2024"
const mins = readingTime('word '.repeat(400));  // -> 2
```

## Use it in a page

Call the helpers from the frontmatter script of any `.astro` page or inside an
MDX file:

```astro
---
import { readingTime } from '@astro-starlight-template/ui-components';
const minutes = readingTime(Astro.props.body);
---
<p>{minutes} min read</p>
```

## Next steps

- Browse every helper in the [Example Reference](/reference/example/).
- Contributing to the starter? Read the [Contributors guide](/guides/contributors/).
