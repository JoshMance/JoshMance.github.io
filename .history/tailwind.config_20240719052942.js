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
      'primary': '#042B67',
      'secondary': '#0E3672',
      'accent': '#ffca28',
      'white': '#F1F3F6',
      'grey' : '#171718'
    },
  },
  plugins: [],
}
