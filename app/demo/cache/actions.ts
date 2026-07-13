'use server'

import { revalidateTag, updateTag } from 'next/cache'
import { incrementValue } from './data'

/**
 * Server Action that mutates the value and refreshes the `demo-data` cache.
 *
 * `updateTag('demo-data')` gives **read-your-writes** semantics: the cache is
 * expired and recomputed *within this same request*, so the page re-renders
 * with the new value immediately.
 */
export async function incrementAction() {
  incrementValue()
  updateTag('demo-data')

  // Alternative — eventual (not read-your-writes) invalidation. In Next.js 16
  // `revalidateTag` requires a second profile argument:
  //
  //   revalidateTag('demo-data', 'minutes')
  //
  // Referenced here so both patterns live in the codebase.
  void revalidateTag
}
