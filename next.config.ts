import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Set basePath for GitHub Pages deployment (e.g., /repo-name)
  // Leave empty/undefined for custom domain deployment
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

export default nextConfig
