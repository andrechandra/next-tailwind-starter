import { ComponentsGrid } from '@/components/showcase/components-grid'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ThemeToggle } from '@/components/theme-toggle'

export default function ComponentsPage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <nav className="flex justify-between items-center mb-16">
        <Button variant="ghost" asChild>
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </Button>
        <ThemeToggle />
      </nav>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold">Built-in Components</h1>
          <p className="text-muted-foreground">
            Showcase of available shadcn/ui components
          </p>
        </div>
      </div>
      <ComponentsGrid />
    </main>
  )
}
