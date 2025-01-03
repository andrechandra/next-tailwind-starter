import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <div className="container mx-auto px-8 md:px-16 py-16 flex-1 flex flex-col">
        <nav className="flex justify-end items-center">
          <ThemeToggle />
        </nav>

        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8">
          <h1 className="font-inter space-y-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter">
            Next.js + Tailwind CSS + shadcn/ui Starter
          </h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl">
            A starter template for building modern web applications with
            Next.js, Tailwind CSS, and shadcn/ui components. Pre-configured with
            TypeScript and ESLint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/components">See all components</Link>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/AndreChips/next-tailwind-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the repository
              </a>
            </Button>
          </div>
        </div>
      </div>

      <footer className="py-6 text-center text-xs sm:text-sm text-muted-foreground">
        <b>
          © {new Date().getFullYear()}{' '}
          <Button variant="link_right" asChild className="p-0 h-auto font-bold">
            <Link href="https://github.com/AndreChips">Andre Chandra</Link>
          </Button>
          . All rights reserved. <br />
        </b>
        Inspired by{' '}
        <Button variant="link_right" asChild className="p-0 h-auto font-bold">
          <Link href="https://theodorusclarence.com">Theodorus Clarence</Link>
        </Button>
      </footer>
    </main>
  )
}
