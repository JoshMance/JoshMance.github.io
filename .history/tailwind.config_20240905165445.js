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

      'primary-dark': '#1E2022', 
      'secondary-dark':'#15638D',
      'accent-dark': '#E0E1E4',

      'accent-yellow-bright': '#FFEA00',
      'accent-yellow-dull': '#E5DE91',
    },
  },
  plugins: [],
}
