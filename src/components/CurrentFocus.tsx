'use client'

import { motion } from 'framer-motion'
import { Zap, Layout, Server, Shield, Gamepad2 } from 'lucide-react'
import { profile } from '@/data/profile'

const focusIcons = [Zap, Layout, Server, Shield, Gamepad2]
const focusDescriptions = [
  'Building fast, maintainable apps that scale',
  'Clean component architecture and UI systems',
  'APIs, databases, and server-side reliability',
  'Resilient design and solid engineering fundamentals',
  'Tools and utilities for game development ecosystems',
]

export default function CurrentFocus() {
  return (
    <section id="now" className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-md-primary font-mono text-sm mb-3 tracking-widest uppercase">Now</p>
          <h2 className="text-3xl sm:text-4xl font-black text-md-on-surface">Current focus</h2>
        </motion.div>
        <div className="space-y-4">
          {profile.currentFocus.map((item, i) => {
            const Icon = focusIcons[i] ?? Zap
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-4 p-5 rounded-md-xl bg-md-surface-container border border-md-outline-variant/30 hover:border-md-primary/30 transition-colors group"
              >
                <div className="w-10 h-10 shrink-0 rounded-md-lg bg-md-primary-container/20 flex items-center justify-center group-hover:bg-md-primary-container/40 transition-colors mt-0.5">
                  <Icon size={18} className="text-md-primary" />
                </div>
                <div>
                  <p className="font-semibold text-md-on-surface mb-1">{item}</p>
                  <p className="text-sm text-md-on-surface-variant">{focusDescriptions[i] ?? ''}</p>
                </div>
                <div className="ml-auto shrink-0">
                  <span className="flex items-center gap-1 text-xs text-green-400 font-medium">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
                    Active
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
