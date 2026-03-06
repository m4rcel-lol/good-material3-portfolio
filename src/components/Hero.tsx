'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Github, Mail, MapPin, Clock } from 'lucide-react'
import { profile } from '@/data/profile'

function PolandClock() {
  const [time, setTime] = useState('')
  useEffect(() => {
    const update = () => {
      setTime(new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/Warsaw', hour: '2-digit', minute: '2-digit' }))
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])
  return (
    <span className="flex items-center gap-1.5 text-xs text-md-on-surface-variant font-mono">
      <Clock size={12} />
      {time} Warsaw
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 pb-16 z-10">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8 flex justify-center"
        >
          <div className="relative animate-float">
            <div className="w-28 h-28 rounded-full bg-md-primary-container flex items-center justify-center shadow-2xl border-2 border-md-primary/30">
              <span className="text-4xl font-black text-md-on-primary-container font-mono tracking-tighter">m5</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-2 border-md-background flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-green-300 rounded-full animate-pulse" />
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md-full bg-md-surface-container border border-md-outline-variant/50 text-xs text-md-on-surface-variant">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Working on something
            <span className="text-md-outline">·</span>
            <PolandClock />
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-7xl font-black tracking-tight text-md-on-surface mb-3"
        >
          {profile.name}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-3 mb-6"
        >
          {profile.handles.map(h => (
            <span key={h} className="px-3 py-1 rounded-md-sm bg-md-surface-container-high text-md-primary font-mono text-sm border border-md-outline-variant/30">
              @{h}
            </span>
          ))}
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-xl sm:text-2xl text-md-primary font-semibold mb-4"
        >
          {profile.tagline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="text-md-on-surface-variant text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {profile.subtitle}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex justify-center items-center gap-1.5 text-sm text-md-on-surface-variant mb-10"
        >
          <MapPin size={14} />
          <span>{profile.location}</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md-xl bg-md-primary text-md-on-primary font-semibold text-sm hover:opacity-90 transition-opacity shadow-lg"
          >
            View Projects
          </a>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md-xl bg-md-surface-container-high text-md-on-surface font-semibold text-sm border border-md-outline-variant/50 hover:bg-md-surface-container-highest transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href="mailto:contact@m5rcel.dev"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md-xl bg-md-surface-container text-md-on-surface-variant font-semibold text-sm border border-md-outline-variant/30 hover:bg-md-surface-container-high transition-colors"
          >
            <Mail size={16} />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
