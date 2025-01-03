import type { Metadata } from 'next'
import { Inter, Poppins, Merriweather } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const merriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const metadata: Metadata = {
  title: 'Next.js Starter Template',
  description:
    'A starter template with Next.js, Tailwind CSS, TypeScript, and shadcn/ui',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '@/public/vercel.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '@/public/vercel.svg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${poppins.variable} ${merriweather.variable}`}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
