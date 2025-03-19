/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.html', 
            './index.html'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
    },        
    colors: {
      
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#004582', 
      'secondary':'#90BAF5',
      'accent': '#ffd900',

      'primary-dark': '  #0f172a', 
      'secondary-dark':'#1e293b',
      'accent-dark': '#ffd900',

      'primary-faint': '#d6ecffff', 

      'black':'#000000',
      'dark-grey':'#aaafb8',
      'grey': "#f7f7f7ff",
      'light-grey': "#f1f1f1",
      'white': '#ffffff',

      'dark-white': "#e8e8e8",
      'dark-base': "#121212",
      'dark-low': "#1C1C1E",
      'dark-middle': "#2C2C2E",
      'dark-upper': "#3A3A3C",
    },
  },
plugins: [
    function ({ addUtilities }) {
        const extendUnderline = {
            '.underline': {
                'textDecoration': 'underline',
                'text-decoration-color': '#ffd900',
                'text-decoration-thickness': '2px',
            },
            '.underline-primary' : {
              'text-decoration': 'underline',
              'text-decoration-color': '#004582',
              'text-decoration-thickness': '3px',
              'text-underline-offset': '4px',
          },
        }
        addUtilities(extendUnderline)
    }
]
}
