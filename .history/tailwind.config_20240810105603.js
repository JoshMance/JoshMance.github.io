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
      'primary': '#D0A679', 
      'secondary':'#00131B',
      'accent': '#0B0101',

    },
  },
  plugins: [],
}