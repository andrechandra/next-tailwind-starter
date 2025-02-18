import { Button } from '@/components/ui/button'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Not Found | Andre Chandra Putra',
  description: "Andre Chandra Putra's personal website",
}

export default function ErrorPage() {
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
          <Link href="/">
            <Button variant="link_left" className="text-black dark:text-white ">
              Return to homepage
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
