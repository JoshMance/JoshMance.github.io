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
      'primary': '#F8F9FB', 
      'secondary':'#123065',
      'tertiary':'#123065',
      'accent': '#02101A',
    },
  },
  plugins: [],
  
}
