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
          green: '#7ED957',
          darkGreen: '#008037',
          darkPink: '#FB92FF',
          red: '#CA3800',
          yellow: '#ffff33',
          darkYellow: '#F5AF0C',
          purple: '#D103D1',
        },
      },
      fontFamily: {
        bungee: ['var(--font-bungee)', ...fontFamily.serif],
        bungeeOutline: ['var(--font-bungeeOutline)', ...fontFamily.serif],
        openSans: ['var(--font-openSans)', ...fontFamily.sans],
      },
      keyframes: {
        slideRight: {
          '0%': { opacity: 0, transform: 'translateX(100%)' },
          '100%': { opacity: 100, transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 100, transform: 'translateY(0)' },
        },
        fadeInFromSmall: {
          '0%': { opacity: '0', transform: 'scale(0.5)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        slideRight: 'slideRight 0.2s ease-out forwards',
        slideUp: 'slideUp 0.2s ease-out forwards',
        fadeOut: 'fadeOut 0.2s ease-out forwards',
        fadeInFromSmall: 'fadeInFromSmall 0.1s ease-out forwards',
      },
    },
  },
  plugins: [],
}
