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
      'primary': '#ffffff', 
      'primary-alt': '#E8E8F4', 
      'secondary':'#15638D',
      'accent': '#00020C',

      'primary-dark': '#111827', 
      'secondary-dark':'#374151',
      'accent-dark': '#e4e4e4',

      'accent-yellow-bright': '#FFEA00',
      'accent-yellow-dull': '#D2CA41',
    },
  },
  plugins: [],
}
