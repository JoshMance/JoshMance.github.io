/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  darkMode: ['selector', '[data-mode="dark"]'],
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
      'primary-dark': '#121212', 
      'secondary-dark':'#101010',
      'accent-dark': '#1876B8',
    },
  },
  plugins: [],
  
}
