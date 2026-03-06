'use client'

import { JSX } from 'react'
import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects } from '@/data/profile'
import clsx from 'clsx'

function TerminalPreview() {
  return (
    <div className="bg-[#0d1117] rounded-md-md p-4 font-mono text-xs h-32 overflow-hidden border border-[#30363d]">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      <p className="text-green-400">$ termitune</p>
      <p className="text-green-300/60">▶  Now Playing: Track_01.flac</p>
      <p className="text-green-300/40">   ████████████░░░░ 68%  2:34 / 3:45</p>
      <p className="text-green-300/30">   [q]quit [n]next [p]prev [space]pause</p>
    </div>
  )
}

function BinaryPreview() {
  const rows = [
    '10110101001011010010110',
    '01001010110100101101001',
    '11010010110100101101001',
    '00101101001011010010110',
  ]
  return (
    <div className="bg-[#0d1117] rounded-md-md p-4 font-mono text-xs h-32 overflow-hidden border border-[#30363d]">
      <div className="flex gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
      </div>
      {rows.map((r, i) => (
        <p key={r} className="text-cyan-400/80 leading-tight text-[10px]" style={{ opacity: 1 - i * 0.2 }}>{r}</p>
      ))}
    </div>
  )
}

function GraphPreview() {
  return (
    <div className="bg-[#0d1117] rounded-md-md p-4 h-32 overflow-hidden border border-[#30363d] flex items-center justify-center">
      <svg width="180" height="80" viewBox="0 0 180 80">
        <line x1="90" y1="10" x2="30" y2="55" stroke="#4F378B" strokeWidth="1.5" />
        <line x1="90" y1="10" x2="90" y2="55" stroke="#4F378B" strokeWidth="1.5" />
        <line x1="90" y1="10" x2="150" y2="55" stroke="#4F378B" strokeWidth="1.5" />
        <line x1="30" y1="55" x2="60" y2="75" stroke="#4F378B" strokeWidth="1" strokeDasharray="3,2" />
        <circle cx="90" cy="10" r="8" fill="#D0BCFF" />
        <circle cx="30" cy="55" r="6" fill="#4F378B" />
        <circle cx="90" cy="55" r="6" fill="#4F378B" />
        <circle cx="150" cy="55" r="6" fill="#4F378B" />
        <circle cx="60" cy="75" r="4" fill="#49454F" />
        <text x="90" y="14" textAnchor="middle" fill="#381E72" fontSize="7" fontWeight="bold">HEAD</text>
      </svg>
    </div>
  )
}

function WebPreview() {
  return (
    <div className="bg-[#0d1117] rounded-md-md p-3 h-32 overflow-hidden border border-[#30363d]">
      <div className="bg-[#1c1c1e] rounded px-2 py-1 flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-green-500/60" />
        <span className="text-xs text-gray-500 font-mono">minecraft.net</span>
      </div>
      <div className="space-y-1">
        <div className="h-2 bg-[#1a472a] rounded w-3/4" />
        <div className="h-1.5 bg-[#2d5a27]/60 rounded w-full" />
        <div className="h-1.5 bg-[#2d5a27]/40 rounded w-5/6" />
        <div className="flex gap-2 mt-2">
          <div className="h-5 w-16 bg-[#1a472a]/80 rounded text-[8px] text-green-400 flex items-center justify-center font-mono">Download</div>
          <div className="h-5 w-12 bg-[#2d5a27]/50 rounded" />
        </div>
      </div>
    </div>
  )
}

function CodePreview() {
  return (
    <div className="bg-[#0d1117] rounded-md-md p-4 font-mono text-[10px] h-32 overflow-hidden border border-[#30363d]">
      <p className="text-blue-400">from <span className="text-green-300">m5rcode</span> import utils</p>
      <p className="text-gray-500 mt-1"># utility library</p>
      <p className="text-yellow-300">def <span className="text-blue-300">chunk</span>(lst, n):</p>
      <p className="text-gray-400 pl-3">return [lst[i:i+n]</p>
      <p className="text-gray-400 pl-3">{'  '}for i in range(0,len(lst),n)]</p>
    </div>
  )
}

const previewMap: Record<string, () => JSX.Element> = {
  terminal: TerminalPreview,
  binary: BinaryPreview,
  graph: GraphPreview,
  web: WebPreview,
  code: CodePreview,
}

const categoryColors: Record<string, string> = {
  terminal: 'text-green-400 bg-green-400/10 border-green-400/20',
  systems: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
  experimental: 'text-purple-400 bg-purple-400/10 border-purple-400/20',
  web: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  tool: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="text-md-primary font-mono text-sm mb-3 tracking-widest uppercase">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-black text-md-on-surface">Things I&apos;ve built</h2>
        </motion.div>
        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((project, i) => {
            const Preview = previewMap[project.preview] ?? CodePreview
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col rounded-md-xl bg-md-surface-container border border-md-outline-variant/30 hover:border-md-primary/40 transition-all duration-300 overflow-hidden"
              >
                <div className="p-1.5">
                  <Preview />
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-md-on-surface text-lg group-hover:text-md-primary transition-colors">{project.name}</h3>
                    <span className={clsx('text-xs px-2 py-0.5 rounded-md-full border font-medium capitalize', categoryColors[project.category] ?? 'text-md-on-surface-variant bg-md-surface-variant/30 border-md-outline-variant/30')}>
                      {project.category}
                    </span>
                  </div>
                  <p className="text-md-on-surface-variant text-sm leading-relaxed mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tech.map(t => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded-md-sm bg-md-surface-container-high text-md-on-surface-variant border border-md-outline-variant/20">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.links.source}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md-lg bg-md-surface-container-high text-md-on-surface text-xs font-medium hover:bg-md-primary/20 hover:text-md-primary border border-md-outline-variant/30 transition-colors"
                    >
                      <Github size={12} />
                      Source
                    </a>
                    {project.links.demo ? (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md-lg bg-md-primary text-md-on-primary text-xs font-medium hover:opacity-90 transition-opacity"
                      >
                        <ExternalLink size={12} />
                        Demo
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md-lg text-md-outline text-xs font-medium border border-md-outline-variant/20 cursor-not-allowed opacity-50">
                        <ExternalLink size={12} />
                        No demo
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
