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
      'secondary':'#00C8FF',
      'accent': '#02101A',
    },
  },
  plugins: [],
  
}
