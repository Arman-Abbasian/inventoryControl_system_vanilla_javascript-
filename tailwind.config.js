/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.html",
    "./src/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bg-image-1': "url('/public/image/bgImage.jpg')",
        'bg-image-2': "url('/public/image/image-blue.jpg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
