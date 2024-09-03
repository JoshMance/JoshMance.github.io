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
      'tertiary':'#0B419D',
      'accent': '#02101A',
    },
  },
  plugins: [],
  
}
