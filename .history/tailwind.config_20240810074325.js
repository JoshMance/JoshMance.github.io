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
      'secondary':'#041B29',
      'accent': '#11EF79',
      'white': '#F1F3F6',
      'light-grey': '#8D8D92',
      'grey' : '#171718'
    },
  },
  plugins: [],
}
