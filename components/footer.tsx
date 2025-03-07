import Link from 'next/link'
import { Button } from './ui/button'

export const Footer = () => {
  return (
    <footer className="py-6 text-center text-xs sm:text-sm text-muted-foreground">
      <b>
        © {new Date().getFullYear()}{' '}
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
