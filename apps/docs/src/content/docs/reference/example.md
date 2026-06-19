---
title: Example Reference
description: API reference for the ui-components utility library.
---

A complete reference for the helpers exported by
`@astro-starlight-template/ui-components`.

## slugify

`slugify(text: string): string`

Converts a heading or title into a URL-safe slug.

```ts
slugify('My Awesome Page'); // -> "my-awesome-page"
```

## formatDate

`formatDate(iso: string, locale = 'en-US'): string`

Formats an ISO date string for display.

```ts
formatDate('2024-01-15');          // -> "January 15, 2024"
formatDate('2024-01-15', 'fr-FR'); // -> "15 janvier 2024"
```

## readingTime

`readingTime(text: string): number`

Estimates reading time in minutes, assuming ~200 words per minute.

```ts
readingTime('word '.repeat(400)); // -> 2
```

## sortedSidebar

`sortedSidebar(entries: SidebarEntry[]): SidebarEntry[]`

Returns a copy of the entries sorted alphabetically by `label`.

```ts
sortedSidebar([
  { label: 'Reference', href: '/reference/' },
  { label: 'Guides', href: '/guides/' },
]);
// -> [{ label: 'Guides', ... }, { label: 'Reference', ... }]
```

## SidebarEntry

The shape consumed by `sortedSidebar`:

```ts
interface SidebarEntry {
  label: string;
  href: string;
  badge?: string;
}
```

## Further reading

- Read [about reference](https://diataxis.fr/reference/) in the Diátaxis framework
