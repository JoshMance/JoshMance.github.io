/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: ['./src/**/*.html', 
  './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff7f50',  
          dark: '#ff4500',   
        },
        secondary: {
          light: '#ff7f50',  
          dark: '#ff4500',   
        },
        accent: {
          light: '#ff7f50',  
          dark: '#ff4500',   
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