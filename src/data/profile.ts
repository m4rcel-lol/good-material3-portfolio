export const profile = {
  name: "Marcel R.",
  handles: ["m5rcel", "m4rcel-lol"],
  githubBranding: "m5rcel { Marcel }",
  tagline: "I love websites",
  subtitle: "Developer from Poland crafting websites, tools, and experimental software",
  description: "Performance-first full-stack apps, clean APIs, terminal tools, and game ecosystem experiments",
  location: "Poland",
  timezone: "Europe/Warsaw",
  // Profile picture configuration
  // To use a profile picture:
  // 1. Add your image to the /public folder (e.g., /public/profile.jpg)
  // 2. Set profileImage to the path: "/profile.jpg"
  // 3. Optionally set a fallback initial (e.g., "MR" for Marcel R.)
  // If profileImage is null, the fallback text will be displayed
  profileImage: "/profile.svg", // e.g., "/profile.jpg" or null to use fallback
  fallbackInitial: "m5", // Text shown when no profile image is set
  links: {
    github: "https://github.com/m4rcel-lol",
    website: "#",
    social: "#",
  },
  currentFocus: [
    "Performance-first full-stack apps",
    "Frontend architecture",
    "Backend logic & database design",
    "System design & reliability",
    "Game ecosystem tooling",
  ],
}

export const techStack = [
  { name: "TypeScript", icon: "ts", color: "#3178C6", category: "language" },
  { name: "Python", icon: "py", color: "#3776AB", category: "language" },
  { name: "MySQL", icon: "db", color: "#4479A1", category: "database" },
  { name: "Rust", icon: "rs", color: "#CE422B", category: "language" },
  { name: "C", icon: "c", color: "#A8B9CC", category: "language" },
  { name: "Frontend Arch", icon: "ui", color: "#8B5CF6", category: "skill" },
  { name: "Backend APIs", icon: "api", color: "#10B981", category: "skill" },
  { name: "Linux / Terminal", icon: "cli", color: "#F59E0B", category: "skill" },
  { name: "Performance Eng", icon: "perf", color: "#EF4444", category: "skill" },
]

export const projects = [
  {
    id: "termitune",
    name: "TermiTune",
    description: "A TUI local music player built for Arch Linux. Fast, keyboard-driven, and deeply customizable — music the way a terminal power-user wants it.",
    tech: ["Rust", "TUI", "Linux"],
    category: "terminal",
    status: "active",
    links: { source: "https://github.com/m4rcel-lol", demo: null },
    preview: "terminal",
  },
  {
    id: "bwfall",
    name: "bwfall",
    description: "Binary Waterfall CLI. Reads raw binary data and renders it as cascading audio-visual output in the terminal. Part hacker art, part debugging utility.",
    tech: ["C", "Linux", "CLI"],
    category: "systems",
    status: "active",
    links: { source: "https://github.com/m4rcel-lol", demo: null },
    preview: "binary",
  },
  {
    id: "fit",
    name: "Fit",
    description: "A from-scratch reimplementation of Git's core object model. An experimental systems project exploring content-addressed storage, tree structures, and commit graphs.",
    tech: ["Systems", "Experimental"],
    category: "experimental",
    status: "active",
    links: { source: "https://github.com/m4rcel-lol", demo: null },
    preview: "graph",
  },
  {
    id: "nostalgia",
    name: "Nostalgia Project",
    description: "A faithful recreation of the classic Minecraft website built with modern web standards. Pixel-perfect preservation of internet history.",
    tech: ["TypeScript", "Web"],
    category: "web",
    status: "active",
    links: { source: "https://github.com/m4rcel-lol", demo: null },
    preview: "web",
  },
  {
    id: "m5rcode",
    name: "m5rcode",
    description: "Personal Python utility library. A growing collection of tools, helpers, and micro-utilities for real projects.",
    tech: ["Python", "Library"],
    category: "tool",
    status: "active",
    links: { source: "https://github.com/m4rcel-lol", demo: null },
    preview: "code",
  },
]
