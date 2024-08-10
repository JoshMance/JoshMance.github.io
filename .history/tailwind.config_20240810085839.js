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
      'primary': '#F6F3EF', 
      'secondary':'#004967',
      'accent': '#0B0101',
    },
  },
  plugins: [],
}
