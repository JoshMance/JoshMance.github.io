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
      'primary': '#061223', 
      'secondary':'#129797',
      'accent': '#453D0C',
      'white': '#F1F3F6',
      'grey' : '#171718'
    },
  },
  plugins: [],
}

