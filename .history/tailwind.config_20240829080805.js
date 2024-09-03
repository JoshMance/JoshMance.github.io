/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  theme: {
    container: {
      center: true,
    },
    darkMode: 'selector',
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#f2f4f8', 
      'secondary':'#47688d',
      'accent': '#02101A',
      'primary-dark': '#113681', 
      'secondary-dark':'#093D78',
      'accent-dark': '#035692',
    },
  },
  plugins: [],
  
}
