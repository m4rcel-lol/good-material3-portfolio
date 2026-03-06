'use client'

import { motion } from 'framer-motion'
import { Github, Globe, ExternalLink } from 'lucide-react'
import { profile } from '@/data/profile'

const links = [
  {
    label: 'GitHub',
    handle: '@m4rcel-lol',
    desc: 'Source code, projects, contributions',
    href: profile.links.github,
    icon: Github,
    accent: 'text-purple-400',
  },
  {
    label: 'Website',
    handle: 'm5rcel.dev',
    desc: 'You are here',
    href: '#',
    icon: Globe,
    accent: 'text-blue-400',
  },
]

export default function InternetIdentity() {
  return (
    <section id="links" className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-md-primary font-mono text-sm mb-3 tracking-widest uppercase">Links</p>
          <h2 className="text-3xl sm:text-4xl font-black text-md-on-surface">Find me online</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href !== '#' ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-4 p-5 rounded-md-xl bg-md-surface-container border border-md-outline-variant/30 hover:border-md-primary/40 transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-md-lg bg-md-surface-container-high flex items-center justify-center shrink-0">
                <link.icon size={22} className={link.accent} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-md-on-surface">{link.label}</span>
                  <ExternalLink size={12} className="text-md-outline opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-xs font-mono text-md-primary">{link.handle}</p>
                <p className="text-xs text-md-on-surface-variant mt-0.5">{link.desc}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-5 rounded-md-xl bg-md-surface-container border border-md-outline-variant/30"
        >
          <p className="text-xs text-md-on-surface-variant mb-3 uppercase tracking-widest font-semibold">Handles & branding</p>
          <div className="flex flex-wrap gap-3">
            {profile.handles.map(h => (
              <span key={h} className="font-mono text-sm text-md-primary bg-md-primary-container/20 px-3 py-1 rounded-md-full border border-md-primary/20">
                {h}
              </span>
            ))}
            <span className="font-mono text-sm text-md-on-surface-variant bg-md-surface-container-high px-3 py-1 rounded-md-full border border-md-outline-variant/20">
              {profile.githubBranding}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
