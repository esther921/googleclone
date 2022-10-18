/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        'allsides': '1px 1px 4px 1px rgba(0, 0, 0, 0.3)',
      },
      screens: {
        'mediu': { 'max': '800px' }
      }
    },
  },
  plugins: [],
}
