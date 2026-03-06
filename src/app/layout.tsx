import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'm5rcel { Marcel } — Developer from Poland',
  description: 'Marcel R. — Developer from Poland crafting websites, tools, and experimental software. Performance-first full-stack apps, clean APIs, terminal tools.',
  keywords: ['Marcel', 'm5rcel', 'm4rcel-lol', 'developer', 'Poland', 'TypeScript', 'Rust', 'web developer', 'portfolio'],
  authors: [{ name: 'Marcel R.', url: 'https://m5rcel.dev' }],
  creator: 'Marcel R.',
  openGraph: {
    title: 'm5rcel { Marcel } — Developer from Poland',
    description: 'Developer from Poland crafting websites, tools, and experimental software.',
    url: 'https://m5rcel.dev',
    siteName: 'm5rcel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'm5rcel { Marcel }',
    description: 'Developer from Poland. I love websites.',
    creator: '@m5rcel',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#10090F',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
