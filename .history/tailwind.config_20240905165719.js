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
      'secondary':'#15638D',
      'accent': '#00020C',

      'primary-dark': '#121212', 
      'secondary-dark':'#1e1e1e',
      'accent-dark': '#e4e4e4',

      'accent-yellow-bright': '#FFEA00',
      'accent-yellow-dull': '#EAE06D',
    },
  },
  plugins: [],
}
