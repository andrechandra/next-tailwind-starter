import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { ComponentGrid } from '@/app/components/component-grid'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

export default function ComponentsPage() {
  return (
    <div className="container mx-auto px-8 md:px-16 py-16">
      <nav className="flex justify-between items-center mb-16">
        <Button isLink variant="link_left" asChild>
          <Link href="/" className="flex items-center group">
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>
        </Button>
        <ThemeToggle />
      </nav>

      <div className="space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">
          Built-in Components
        </h1>
        <ComponentGrid />
      </div>
    </div>
  )
}
