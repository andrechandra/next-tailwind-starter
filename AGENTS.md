# AGENTS.md

On-demand context guide for AI coding agents working in this repository. Human
contributors should read it too. Keep it in sync when architecture changes.

## Stack

| Layer      | Choice                                             |
| ---------- | -------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack default)         |
| Runtime    | React 19                                           |
| Language   | TypeScript 5 (`target` ES2022, strict)             |
| Styling    | Tailwind CSS v4 + shadcn/ui (Radix primitives)     |
| Bundler    | Turbopack (default for `next dev` **and** `build`) |
| Node       | >= 20.9.0 (see `package.json` `engines`)           |
| Database / Auth | none (UI starter — add your own)              |

## Commands (pnpm)

| Command         | Purpose                                            |
| --------------- | -------------------------------------------------- |
| `pnpm dev`      | Dev server (Turbopack)                             |
| `pnpm build`    | Production build (Turbopack). Fallback: `next build --webpack` |
| `pnpm start`    | Serve the production build                          |
| `pnpm typegen`  | `next typegen` — generate `PageProps`/`LayoutProps` |
| `pnpm lint`     | ESLint (flat config, `eslint.config.mjs`)          |
| `pnpm test`     | Jest + Testing Library                             |
| `pnpm format`   | Prettier                                           |

## Routing structure

```
app/
  layout.tsx              Root layout (metadata, ThemeProvider, fonts)
  page.tsx                Home
  components/page.tsx      Component gallery
  demo/cache/             Cache Components reference implementation
    page.tsx               Cached read + Server Action form
    data.ts                `use cache` fetcher (cacheTag + cacheLife)
    actions.ts             Server Action (updateTag)
  not-found.tsx            Native 404 boundary (returns 404 status)
proxy.ts                  Network boundary (successor to middleware.ts)
```

### Typed async route props

`params` and `searchParams` are **async** in Next.js 16 — always `await` them.
Use the generated global helpers (run `pnpm typegen` after adding routes):

```ts
export default async function Page(props: PageProps<'/demo/cache'>) {
  const searchParams = await props.searchParams
}
```

## Caching layer — strict tokens

Cache Components is enabled via `cacheComponents: true` in `next.config.ts`
(this replaces the old `experimental.ppr`). Rules:

- Mark a cacheable function with the **`use cache`** directive on its first line.
- Tag entries with **`cacheTag('<tag>')`** (from `next/cache`).
- Set a revalidation profile with **`cacheLife('<profile>')`**. Stable named
  profiles: `seconds`, `minutes`, `hours`, `days`, `weeks`, `max`, `default`.
  Custom timespans: `cacheLife({ stale, revalidate, expire })`.
- Dynamic/cached content in a page must be read inside `<Suspense>`.

### Invalidation — pick the right one

| API                              | Semantics                                   |
| -------------------------------- | ------------------------------------------- |
| `updateTag('<tag>')`             | **Read-your-writes** — expire + recompute in the current request. Use in Server Actions after a mutation. |
| `revalidateTag('<tag>', '<profile>')` | Eventual invalidation. **Two args required in Next 16** (tag + profile). |

Canonical example: [app/demo/cache/](app/demo/cache/).

## Network boundary

`proxy.ts` (root) replaces `middleware.ts`. Add auth/redirects/rewrites there
and scope with `config.matcher` (empty by default = runs on nothing).

## View Transitions

Native React 19 View Transitions are enabled via `experimental.viewTransition`
in `next.config.ts`. Trigger per-navigation types with the `<Link>`
`transitionTypes` prop, e.g. `<Link href="/x" transitionTypes={['slide']}>`.

## Conventions

- Path alias: `@/*` → repo root.
- Types via `type` (not `interface`) — enforced by ESLint.
- No `console` / no `any` (ESLint errors).
