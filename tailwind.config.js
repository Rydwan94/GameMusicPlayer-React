/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryText: "#FFF",
        secondaryText: "#D3BFD6"
      },
      fontFamily: {
        cabin: ['Cabin', 'sans-serif'],
        allerta: ['Allerta', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}