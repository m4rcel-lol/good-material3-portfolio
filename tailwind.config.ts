import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'md-primary': 'var(--md-sys-color-primary)',
        'md-on-primary': 'var(--md-sys-color-on-primary)',
        'md-primary-container': 'var(--md-sys-color-primary-container)',
        'md-secondary': 'var(--md-sys-color-secondary)',
        'md-tertiary': 'var(--md-sys-color-tertiary)',
        'md-background': 'var(--md-sys-color-background)',
        'md-surface': 'var(--md-sys-color-surface)',
        'md-surface-variant': 'var(--md-sys-color-surface-variant)',
        'md-surface-container': 'var(--md-sys-color-surface-container)',
        'md-surface-container-low': 'var(--md-sys-color-surface-container-low)',
        'md-surface-container-high': 'var(--md-sys-color-surface-container-high)',
        'md-surface-container-highest': 'var(--md-sys-color-surface-container-highest)',
        'md-on-surface': 'var(--md-sys-color-on-surface)',
        'md-on-surface-variant': 'var(--md-sys-color-on-surface-variant)',
        'md-outline': 'var(--md-sys-color-outline)',
        'md-outline-variant': 'var(--md-sys-color-outline-variant)',
      },
      borderRadius: {
        'md-xs': 'var(--md-sys-shape-corner-extra-small)',
        'md-sm': 'var(--md-sys-shape-corner-small)',
        'md-md': 'var(--md-sys-shape-corner-medium)',
        'md-lg': 'var(--md-sys-shape-corner-large)',
        'md-xl': 'var(--md-sys-shape-corner-extra-large)',
        'md-full': 'var(--md-sys-shape-corner-full)',
      },
      animation: {
        'blob': 'blob 7s infinite',
        'blob-slow': 'blob 12s infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'cursor-blink': 'cursor-blink 1s step-end infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'cursor-blink': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
