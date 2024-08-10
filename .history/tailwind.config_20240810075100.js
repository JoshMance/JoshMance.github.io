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
      'primary': '#f5f2ef', 
      'secondary':'#004967',
      'accent': '#151519',
      'white': '#F1F3F6',
      'light-grey': '#000009',
      'grey' : '#171718'
    },
  },
  plugins: [],
}
