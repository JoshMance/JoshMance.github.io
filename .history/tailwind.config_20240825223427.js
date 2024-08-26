/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  theme: {
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#010b24', 
      'secondary':'#00131B',
      'accent': '#F3F3F8',

    },
  },
  plugins: [],
}
