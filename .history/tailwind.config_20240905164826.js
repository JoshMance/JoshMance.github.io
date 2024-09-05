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
      'accent-text':'#202124',
      'accent-bright': '#7E0A0A',
      'accent-dull': '#0D77B03F',

      'primary-transparent': '#F3F4F85C',
      'secondary-transparent':'#15638D29', 

      'primary-dark': '#202124', 
      'secondary-dark':'#3c4042',
      'accent-bright-dark':'#7E0A0A',
      'accent-dull-dark': '#1B2D43',

      'accent-yellow-bright': '#FFEA00',
      'accent-yellow-dull': '#E5DE91',
    },
  },
  plugins: [],
}
