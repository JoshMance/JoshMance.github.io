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
      'accent': '#368B05',

    },
  },
  plugins: [],
}
