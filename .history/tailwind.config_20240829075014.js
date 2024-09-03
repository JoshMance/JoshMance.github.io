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
          dark: '#ff4500',   
        },
        secondary: {
          light: '#f2f4f8', 
          dark: '#ff4500',   
        },
        accent: {
          light: '#f2f4f8', 
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
