import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="container mx-auto px-8 md:px-16 py-16 flex-1 flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
          <h1 className="font-poppins font-extrabold leading-tight tracking-tighter space-y-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
            Next.js + Tailwind CSS + shadcn/ui Starter
          </h1>
          <p className="text-xs sm:text-xs md:text-sm lg:text-base text-muted-foreground max-w-2xl">
            A starter template for building modern web applications with
            Next.js, Tailwind CSS, and shadcn/ui components. Pre-configured with
            TypeScript, Husky, and ESLint.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild>
              <Link href="/components">See all components</Link>
            </Button>
            <Button variant="outline" asChild>
              <a
                href="https://github.com/andrechandra/next-tailwind-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                See the repository
              </a>
            </Button>
          </div>
          <div>
            <Button
              asChild
              variant="outline"
              className="flex items-center gap-2"
            >
              <Link
                href="https://vercel.com/new/clone?repository-url=https://github.com/andrechandra/next-tailwind-starter"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/vercel.svg"
                  alt="Vercel Logo"
                  width={20}
                  height={20}
                  className="w-4 h-4 invert dark:invert-0"
                />
                Deploy to Vercel
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
