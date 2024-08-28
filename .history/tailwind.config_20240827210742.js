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
      'primary': '#011428', 
      'secondary':'#EFF4F7',
      'accent': '#684B07',

    },
  },
  plugins: [],
}
