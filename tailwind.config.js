/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image': "url('/public/image/bgImage.jpg')",
      }
    },
  },
  plugins: [],
}
