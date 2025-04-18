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
      'primary': '#F7F0E8', 
      'secondary':'#00131B',
      'accent': '#F8F3F3',

    },
  },
  plugins: [],
}
