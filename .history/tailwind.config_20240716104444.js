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
      'secondary': '#110674',
      'accent': '#64D7DF',
      'white': '#F7F8F9',
    },
  },
  plugins: [],
}
