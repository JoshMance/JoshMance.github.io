/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: ['./src/**/*.html', 
  './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#ff7f50',  // Light mode color
          dark: '#ff4500',   // Dark mode color
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
