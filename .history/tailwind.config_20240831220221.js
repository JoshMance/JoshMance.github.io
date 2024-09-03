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
      'primary-light': '#F8F9FB', 
      'secondary-light':'#01060F',
      'accent-light': '#388BFF',
      'primary-dark': '#F8F9FB', 
      'secondary-dark':'#040E20',
      'accent-dark': '#02101A',
    },
  },
  plugins: [],
  
}
