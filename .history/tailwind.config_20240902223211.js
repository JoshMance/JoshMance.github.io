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
      'secondary':'#0B117B',
      'accent': '#F2E148',
      'primary-dark': '#151621', 
      'secondary-dark':'#1a1c2c',
      'accent-dark': '#54AFC1',
    },
  },
  plugins: [],
  extend: {
    backgroundImage: {
      'hero': "url('./src/images/vintage-wallpaper.webp')",
    },
}
}