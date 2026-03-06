'use client'

import { motion } from 'framer-motion'
import { Code2, Zap, Terminal, Globe } from 'lucide-react'

const highlights = [
  { icon: Code2, label: 'Full-Stack', desc: 'End-to-end product thinking' },
  { icon: Terminal, label: 'Systems', desc: 'Low-level & CLI tools' },
  { icon: Zap, label: 'Performance', desc: 'Speed-first engineering' },
  { icon: Globe, label: 'Web', desc: 'Beautiful, functional UIs' },
]

export default function About() {
  return (
    <section id="about" className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-md-primary font-mono text-sm mb-3 tracking-widest uppercase">About</p>
          <h2 className="text-3xl sm:text-4xl font-black text-md-on-surface mb-8">Who I am</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4 text-md-on-surface-variant leading-relaxed">
              <p>
                I&apos;m Marcel — a developer based in Poland who genuinely loves building things for the web and the terminal.
                I spend most of my time writing TypeScript, Python, Rust, and C — usually for projects that either make
                something faster, solve a real itch, or just explore an interesting idea.
              </p>
              <p>
                My work spans the full stack: performant front-ends, clean REST and database-backed APIs,
                terminal utilities with real craftsmanship, and experimental systems software.
                I care deeply about code quality, developer experience, and the kind of software that actually works reliably.
              </p>
            </div>
            <div className="space-y-4 text-md-on-surface-variant leading-relaxed">
              <p>
                When I&apos;m not coding, I&apos;m usually reading about systems design, poking at game ecosystems,
                or thinking about why certain websites feel so good to use. I believe good software
                is a craft — and the details matter.
              </p>
              <p>
                I go by <span className="text-md-primary font-mono">m5rcel</span> or <span className="text-md-primary font-mono">m4rcel-lol</span> online.
                The GitHub branding is <span className="text-md-primary font-mono">m5rcel {'{ Marcel }'}</span> — a little nod to the brace syntax I spend so much time with.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center p-4 rounded-md-xl bg-md-surface-container border border-md-outline-variant/30 hover:border-md-primary/40 transition-colors group"
              >
                <div className="w-10 h-10 rounded-md-lg bg-md-primary-container/30 flex items-center justify-center mb-3 group-hover:bg-md-primary-container/50 transition-colors">
                  <h.icon size={20} className="text-md-primary" />
                </div>
                <span className="font-semibold text-md-on-surface text-sm">{h.label}</span>
                <span className="text-xs text-md-on-surface-variant mt-1">{h.desc}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
