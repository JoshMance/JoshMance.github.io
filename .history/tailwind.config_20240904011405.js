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
      'primary': '#03191F', 
      'secondary':'#243258',
      'accent': '#F2E148',
      'primary-dark': '#151621', 
      'secondary-dark':'#1a1c2c',
      'accent-dark': '#54AFC1',
    },
  },
  plugins: [],
}