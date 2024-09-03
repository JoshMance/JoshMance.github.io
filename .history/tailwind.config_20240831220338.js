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
      'primary-dark': '#121212', 
      'secondary-dark':'#101010',
      'accent-dark': '#1876B8',
    },
  },
  plugins: [],
  
}
