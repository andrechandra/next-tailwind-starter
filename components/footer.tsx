'use client' // reads current time (new Date) after mount — not allowed at prerender under Cache Components

import Link from 'next/link'
import { useSyncExternalStore } from 'react'
import { Button } from './ui/button'

const noop = () => () => {}

export const Footer = () => {
  // Client-only current year: the server snapshot is null (so the current time
  // is never read during prerender under Cache Components) and the client
  // snapshot resolves after hydration — no mismatch, no setState-in-effect.
  const year = useSyncExternalStore(
    noop,
    () => new Date().getFullYear(),
    () => null
  )

  return (
    <footer className="py-6 text-center text-xs sm:text-sm text-muted-foreground">
      <b>
        © {year ?? ''}{' '}
        <Button
          isLink
          variant="link_right"
          asChild
          className="p-0 h-auto font-bold"
          isExternal
        >
          <Link href="https://github.com/andrechandra" target="_blank">
            Andre Chandra
          </Link>
        </Button>
        . All rights reserved. <br />
      </b>
    </footer>
  )
}
