import type { Config } from 'tailwindcss'

export default {
  content: [
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-exo2)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },

      screens: {
        fhd: '1920px',
        uw: '2560px',
        wqhd: '3440px',
      },
    },
  },
  plugins: [],
} satisfies Config
