import { LinkButton } from '@/components/ui/link-button'
import { ArrowLeft } from 'lucide-react'
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
          <LinkButton variant="underline_link_left" asChild>
            <Link href="/" className="flex items-center group">
              <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Home
            </Link>
          </LinkButton>
        </div>
      </div>
    </main>
  )
}
