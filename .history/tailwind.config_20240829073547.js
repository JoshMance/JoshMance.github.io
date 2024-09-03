/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  theme: {
    container: {
      center: true,
    },
    darkMode: 'class',
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#f2f4f8', 
      'secondary':'#47688d',
      'accent': '#02101A',

    },
  },
  plugins: [],
  
}
