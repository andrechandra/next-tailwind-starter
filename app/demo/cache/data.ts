import { cacheLife, cacheTag } from 'next/cache'

// Module-level store standing in for a database / external API. In a real app
// this would be a DB query or `fetch()` — the caching semantics are identical.
let counter = 0

/**
 * Reads the current value behind Next.js 16's Cache Components layer.
 *
 * - `'use cache'`     — marks this function's result as cacheable.
 * - `cacheTag(...)`   — associates the entry with a tag so it can be
 *                       invalidated by `updateTag` / `revalidateTag`.
 * - `cacheLife(...)`  — applies a stable named revalidation profile.
 */
export async function getCachedValue(): Promise<{
  value: number
  computedAt: string
}> {
  'use cache'
  cacheTag('demo-data')
  cacheLife('minutes') // stale 5m · revalidate 1m · expire 1h

  return {
    value: counter,
    computedAt: new Date().toISOString(),
  }
}

/** Mutates the underlying store. Called from the Server Action. */
export function incrementValue(): number {
  counter += 1
  return counter
}
