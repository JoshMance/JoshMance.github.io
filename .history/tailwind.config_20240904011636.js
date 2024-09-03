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
      'primary': '#F3F4F8', 
      'secondary':'#0D7B89',
      'accent-bright': '#F2E148',
      'accent-dull': '#F2E148',
      'primary-dark': '#151621', 
      'secondary-dark':'#1a1c2c',
      'accent-dark': '#54AFC1',
    },
  },
  plugins: [],
}
