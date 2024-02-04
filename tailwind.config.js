const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        funk: {
          lime: '#D8FF5A',
          pink: '#FF61D3',
          mango: '#ffae70',
        },
      },
      fontFamily: {
        bungee: ['var(--font-bungee)', ...fontFamily.serif],
        bungeeOutline: ['var(--font-bungeeOutline)', ...fontFamily.serif],
        source: ['var(--font-sourceSans)', ...fontFamily.sans],
      },
      keyframes: {
        slideRight: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 100, transform: 'translateX(0)' },
        },
        fadeOut: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
      },
      animation: {
        slideRight: 'slideRight 0.2s ease-out forwards',
        fadeOut: 'fadeOut 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
