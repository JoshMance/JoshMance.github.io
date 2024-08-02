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
      'secondary': '#030B48', 
      'primary':'#081124',
      'accent': '#11EF79',
      'white': '#F1F3F6',
      'grey' : '#171718'
    },
  },
  plugins: [],
}

