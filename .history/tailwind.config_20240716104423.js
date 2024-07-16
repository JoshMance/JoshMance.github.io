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
      'primary': '#0A3020',
      'secondary': '#0E0A30',
      'accent': '#64D7DF',
      'white': '#F7F8F9',
    },
  },
  plugins: [],
}

