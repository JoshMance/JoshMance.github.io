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
      'accent-bright': '#7E0A0A',
      'accent-dull': '#15638D48',

      'primary-dark': '#01010F', 
      'secondary-dark':'#060B33',
      'accent-bright-dark':'#7E0A0A',
      'accent-dull-dark': '#1B2D43',
    },
  },
  plugins: [],
}
