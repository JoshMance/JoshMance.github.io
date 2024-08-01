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
      'secondary':'#121297',
      'accent': '#EFD111',
      'white': '#F1F3F6',
      'grey' : '#171718'
    },
  },
  plugins: [],
}

