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
      'secondary': '#0E49A2',
      'accent': '#0BC5D2',
      'white': '#F7F8F9',
      'grey' : '#171718'
    },
  },
  plugins: [],
}

