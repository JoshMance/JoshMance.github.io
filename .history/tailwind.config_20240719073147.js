/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#041B3E',
      'secondary': '#08162D',
      'accent': '#ffca28',
      'white': '#F1F3F6',
      'grey' : '#171718'
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "'url(./src/css/cartographer.webp')",
      }
  },
  plugins: [],
}
