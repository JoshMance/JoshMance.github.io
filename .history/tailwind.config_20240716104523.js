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
      'primary': '#0A3473',
      'secondary': '#150B6C',
      'accent': '#3ACDE4',
      'white': '#F7F8F9',
    },
  },
  plugins: [],
}
