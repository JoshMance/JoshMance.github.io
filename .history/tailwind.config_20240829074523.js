/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  theme: {
    container: {
      center: true,
    },
    darkMode: 'class',
    dark: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#114DC4', 
        'secondary':'#061D38',
        'accent': '#EFF4F7',
      },
    light: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#f2f4f8', 
        'secondary':'#47688d',
        'accent': '#02101A',
      },
    }
  }
  },
  plugins: [],
  
}
