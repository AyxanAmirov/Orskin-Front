/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'walpaper': "url('/src/User/assets/images/walpaper-1.jpg')",
      }
    },
  },
  plugins: [],
}