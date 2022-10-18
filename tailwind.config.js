/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    spacing: {
      '13': '52px',
    },
    extend: {
      boxShadow: {
        'allsides': '1px 1px 4px 1px rgba(0, 0, 0, 0.3)',
      },
      
    },
  },
  plugins: [],
}
