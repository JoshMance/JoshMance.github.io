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
      'accent-bright': '#7E0A0A',
      'accent-dull': '#133968',

      'primary-dark': '#0C0C0D', 
      'secondary-dark':'#0B383D',
      'accent-bright-dark': '#7E0A0A',
      'accent-dull-dark': '#133968',
    },
  },
  plugins: [],
}
