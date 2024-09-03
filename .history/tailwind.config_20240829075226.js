/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  container: {
    center: true,
  },
  darkMode: 'class', // or 'media'
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#f2f4f8', 
          dark: '#02092B',   
        },
        secondary: {
          light: '#18757B', 
          dark: '#06323E',   
        },
        accent: {
          light: '#01040A', 
          dark: '#EEEEF4',   
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark'], // Enable background color for dark mode
      textColor: ['dark'],        // Enable text color for dark mode
    },
  },
  plugins: [],
};
