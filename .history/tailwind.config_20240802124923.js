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
      'primary': '#000212', 
      'secondary':'#08090B',
      'accent': '#EFD111',
      'white': '#F1F3F6',
      'grey' : '#171718'
    },
  },
  plugins: [],
}

