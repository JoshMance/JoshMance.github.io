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
      'secondary-light':'#040E20',
      'accent-light': '#02101A',
      'primary-dark': '#F8F9FB', 
      'secondary-dark':'#040E20',
      'accent-dark': '#02101A',
    },
  },
  plugins: [],
  
}
