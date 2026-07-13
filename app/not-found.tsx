import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// Native Next.js App Router 404 boundary. Renders for any unmatched route with
// a proper 404 status — replaces the old `[...not_found]` catch-all hack, which
// conflicted with Cache Components (its async `params` split page vs metadata).
export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-6">
        <h1 className="text-[200px] text-black dark:text-white">404</h1>
        <h2 className="text-2xl font-medium tracking-wider uppercase">
          Oops! Nothing was found
        </h2>
        <p className="text-gray-400 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>
        <div className="pt-4">
          <Button
            isLink
            variant="link_left"
            leftIcon={<ArrowLeft />}
            iconAnimation="slide"
            asChild
          >
            <Link href="/" className="flex items-center group">
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
