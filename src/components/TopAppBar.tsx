'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import clsx from 'clsx'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Stack', href: '#stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Links', href: '#links' },
  { label: 'Now', href: '#now' },
]

export default function TopAppBar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sectionIds = navLinks.map(l => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      entries => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        }
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    sectionIds.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-md-surface/80 backdrop-blur-xl border-b border-md-outline-variant/30 shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-md-primary font-bold text-lg tracking-tight font-mono hover:opacity-80 transition-opacity">
          m5rcel
        </a>
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={clsx(
                'px-3 py-1.5 rounded-md-md text-sm font-medium transition-colors duration-200',
                activeSection === link.href.replace('#', '')
                  ? 'text-md-primary bg-md-primary-container/20'
                  : 'text-md-on-surface-variant hover:text-md-on-surface hover:bg-md-surface-variant/20'
              )}
            >
              {link.label}
            </a>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle />
          <button
            onClick={() => setMobileOpen(v => !v)}
            aria-label="Toggle menu"
            className="flex items-center justify-center w-10 h-10 rounded-md-md text-md-on-surface-variant hover:bg-md-surface-variant/30 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-md-surface/95 backdrop-blur-xl border-b border-md-outline-variant/30">
          <nav className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={clsx(
                  'px-3 py-2 rounded-md-md text-sm font-medium transition-colors duration-200',
                  activeSection === link.href.replace('#', '')
                    ? 'text-md-primary bg-md-primary-container/20'
                    : 'text-md-on-surface-variant hover:text-md-on-surface hover:bg-md-surface-variant/20'
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
