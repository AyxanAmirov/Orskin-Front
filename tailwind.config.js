/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'walpaper': "url('/src/User/assets/image/walpaper-h-services.webp')",
        'service': "url('/src/User/assets/image/servce-sub-bg.webp')",
        'feedbacks': "url('/src/User/assets/image/bg-feedbacks.webp')"
      },
    },
  },
  plugins: [],
}