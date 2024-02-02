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
    },
  },
  plugins: [],
}
