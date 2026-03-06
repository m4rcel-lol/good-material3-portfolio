'use client'

import { Github, ExternalLink } from 'lucide-react'
import { profile } from '@/data/profile'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative z-10 border-t border-md-outline-variant/30 bg-md-surface-container-low/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-xl font-black text-md-on-surface mb-1">{profile.name}</p>
            <p className="text-md-primary font-mono text-sm">@{profile.handles[0]}</p>
            <p className="text-md-on-surface-variant text-sm mt-2">Crafted with code from Poland</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-3">
            <span className="flex items-center gap-2 text-xs px-3 py-1.5 rounded-md-full bg-green-500/10 text-green-400 border border-green-500/20 font-medium">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
              Working on something
            </span>
            <div className="flex items-center gap-3">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-md-on-surface-variant hover:text-md-primary transition-colors"
              >
                <Github size={15} />
                GitHub
              </a>
              {profile.links.website !== '#' && (
                <a
                  href={profile.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-md-on-surface-variant hover:text-md-primary transition-colors"
                >
                  <ExternalLink size={15} />
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-md-outline-variant/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-md-on-surface-variant/60">
            © {year} {profile.name} · {profile.handles[0]}
          </p>
          <p className="text-xs text-md-on-surface-variant/40 font-mono">
            {profile.githubBranding}
          </p>
        </div>
      </div>
    </footer>
  )
}
