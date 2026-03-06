'use client'

import { motion } from 'framer-motion'

const vibes = [
  { label: 'loves websites', accent: 'bg-purple-500/10 text-purple-300 border-purple-500/20' },
  { label: 'terminal aesthetics', accent: 'bg-green-500/10 text-green-300 border-green-500/20' },
  { label: 'clean layouts', accent: 'bg-blue-500/10 text-blue-300 border-blue-500/20' },
  { label: 'performance & polish', accent: 'bg-amber-500/10 text-amber-300 border-amber-500/20' },
  { label: 'experimental builds', accent: 'bg-pink-500/10 text-pink-300 border-pink-500/20' },
  { label: 'Linux power user', accent: 'bg-teal-500/10 text-teal-300 border-teal-500/20' },
  { label: 'gamer / modding energy', accent: 'bg-red-500/10 text-red-300 border-red-500/20' },
  { label: 'ship fast, refine later', accent: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' },
  { label: 'open source mindset', accent: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20' },
  { label: 'internet native', accent: 'bg-violet-500/10 text-violet-300 border-violet-500/20' },
]

const statements = [
  { icon: '⚡', text: 'Building things that feel fast and look good.' },
  { icon: '🖥️', text: 'Terminal first, GUI when it deserves it.' },
  { icon: '🎮', text: 'Game tooling is a legitimate engineering frontier.' },
  { icon: '🔬', text: 'Side projects are how you actually learn.' },
  { icon: '🌐', text: 'The web is the most powerful creative medium.' },
]

export default function VibeSection() {
  return (
    <section id="vibe" className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-md-primary font-mono text-sm mb-3 tracking-widest uppercase">Personality</p>
          <h2 className="text-3xl sm:text-4xl font-black text-md-on-surface">The vibe</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-12"
        >
          {vibes.map((v, i) => (
            <motion.span
              key={v.label}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className={`px-4 py-1.5 rounded-md-full border text-sm font-medium ${v.accent}`}
            >
              {v.label}
            </motion.span>
          ))}
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4">
          {statements.map((s, i) => (
            <motion.div
              key={s.text}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex items-start gap-3 p-4 rounded-md-xl bg-md-surface-container border border-md-outline-variant/20"
            >
              <span className="text-xl shrink-0 mt-0.5">{s.icon}</span>
              <p className="text-md-on-surface-variant text-sm leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
