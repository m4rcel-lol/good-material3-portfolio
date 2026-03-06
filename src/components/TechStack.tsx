'use client'

import { motion } from 'framer-motion'
import { techStack } from '@/data/profile'

const categoryLabels: Record<string, string> = {
  language: 'Languages',
  database: 'Databases',
  skill: 'Skills & Domains',
}

export default function TechStack() {
  const categories = Array.from(new Set(techStack.map(t => t.category)))

  return (
    <section id="stack" className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-md-primary font-mono text-sm mb-3 tracking-widest uppercase">Stack</p>
          <h2 className="text-3xl sm:text-4xl font-black text-md-on-surface mb-12">What I work with</h2>
          <div className="space-y-10">
            {categories.map(cat => (
              <div key={cat}>
                <h3 className="text-md-on-surface-variant text-xs font-semibold uppercase tracking-widest mb-4">
                  {categoryLabels[cat] ?? cat}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {techStack.filter(t => t.category === cat).map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.07 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="flex items-center gap-2.5 px-4 py-2.5 rounded-md-xl bg-md-surface-container border border-md-outline-variant/30 hover:border-md-primary/40 cursor-default transition-colors group"
                    >
                      <span
                        className="w-7 h-7 rounded-md-sm flex items-center justify-center text-[10px] font-bold font-mono text-white"
                        style={{ backgroundColor: tech.color }}
                      >
                        {tech.icon}
                      </span>
                      <span className="text-sm font-medium text-md-on-surface group-hover:text-md-primary transition-colors">{tech.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
