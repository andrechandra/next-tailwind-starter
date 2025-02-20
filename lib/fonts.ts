import { Inter, JetBrains_Mono, Poppins, Merriweather } from 'next/font/google'

const fontSans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  fallback: ['system-ui', 'arial'],
})

const fontMono = JetBrains_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-mono',
  fallback: ['system-ui', 'arial'],
})

const fontPoppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const fontMerriweather = Merriweather({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
})

export const fonts = [
  fontSans.variable,
  fontMono.variable,
  fontPoppins.variable,
  fontMerriweather.variable,
]
