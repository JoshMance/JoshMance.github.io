/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  theme: {
    container: {
      padding: {
        DEFAULT: '0rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#0A1930',
      'secondary': '#0E0A30',
      'accent': '#64D7DF',
      'white': '#F7F8F9',
    },
  },
  plugins: [],
}

