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
      'primary': '#FBF2E6', 
      'secondary':'#00090D',
      'accent': '#004967'

    },
  },
  plugins: [],
}
