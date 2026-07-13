import { NextResponse, type NextRequest } from 'next/server'

/**
 * Network boundary (Next.js 16). `proxy.ts` replaces the old `middleware.ts`
 * convention, making the request-interception boundary explicit. Runs before
 * cached responses are served.
 *
 * This starter ships a pass-through proxy. Add auth, redirects, header
 * rewrites, geo/AB routing, etc. here and populate `config.matcher` to scope
 * which paths it runs on.
 */
export function proxy(_request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  // Empty = the proxy runs on no paths. Add patterns to enable, e.g.:
  //   matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
  matcher: [],
}
