import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'brand-gold': '#FFC107',
        'dark-bg': '#0A0E14',
        'dark-card': '#0F1723',
        'dark-border': '#1A2333',
        'text-light': '#F0F0F0',
        'text-muted': '#A0ADBF',
      },
      fontFamily: {
        'gaming': ['Orbitron', 'sans-serif'],
        'body': ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 30px rgba(255, 193, 7, 0.3)',
        'glow-lg': '0 0 50px rgba(255, 193, 7, 0.5)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
}

export default config
