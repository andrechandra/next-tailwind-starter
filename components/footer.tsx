import Link from 'next/link'
import { LinkButton } from '@/components/ui/link-button'

export const Footer = () => {
  return (
    <footer className="py-6 text-center text-xs sm:text-sm text-muted-foreground">
      <b>
        © {new Date().getFullYear()}{' '}
        <LinkButton
          variant="underline_link_right"
          asChild
          className="p-0 h-auto font-bold"
        >
          <Link href="https://github.com/andrechandra">Andre Chandra</Link>
        </LinkButton>
        . All rights reserved. <br />
      </b>
    </footer>
  )
}
