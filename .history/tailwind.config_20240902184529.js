/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#F8F9FB', 
      'secondary':'#01060F',
      'accent': '#388BFF',
      'primary-dark': '#151621', 
      'secondary-dark':'#1a1c2c',
      'accent-dark': '#1876B8',
    },
  },
  plugins: [],
  
}
