import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Next.js 16 stable Cache Components (successor to experimental.ppr).
  // Enables the `use cache` directive, `cacheLife` profiles and `cacheTag`.
  cacheComponents: true,
  experimental: {
    // Opt in to native View Transitions so <Link transitionTypes> takes effect.
    viewTransition: true,
  },
  images: {
    // `images.domains` was removed in Next 16 in favour of `remotePatterns`.
    remotePatterns: [{ protocol: 'https', hostname: 'vercel.com' }],
  },
}

export default nextConfig
