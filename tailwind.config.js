/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: [
      './views/layouts/*.html',
      './views/*.html'
    ]
  },
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
