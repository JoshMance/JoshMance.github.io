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
      'primary': '#052759',
      'secondary': '#092856',
      'accent': '#0BC5D2',
      'white': '#E4E8EE',
      'grey' : '#171718'
    },
  },
  plugins: [],
}
