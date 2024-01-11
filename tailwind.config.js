/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#D8FF5A",
green: "#FF61D3",
yellow: "#FFCE70",
        }
      },
    },
  },
  plugins: [],
}
