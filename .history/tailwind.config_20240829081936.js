/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media'
  content: ['./src/**/*.html', 
  './index.html'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#F1F4F6',  
          dark: '#0C497E',   
        },
        secondary: {
          light: '#1A95D2',  
          dark: '#0F273D',   
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
