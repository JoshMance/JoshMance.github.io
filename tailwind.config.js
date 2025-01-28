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
      'primary': '#112c58', 
      'secondary':'#0355a7',
      'accent': '#FFD700',

      'primary-dark': '#0c1a31', 
      'secondary-dark':'#101f40',
      'accent-dark': '#FFD700',

      'primary-faint': '#d6ecffff', 

      'black':'#000000',
      'dark-grey':'#dadfe7',
      'grey': "#f2f4f6",
      'white': '#ffffff',

      'dark-white': "#e8e8e8",
      'dark-base': "#121212",
      'dark-low': "#1C1C1E",
      'dark-middle': "#2C2C2E",
      'dark-upper': "#3A3A3C",
    },
  },
  plugins: [       
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
            'textDecoration': 'underline',
            'text-decoration-color': '#f7e018',
        },
        '.underline-red': {
            'textDecoration': 'underline',
            'text-decoration-color': '#e91000',
        },
      }
      addUtilities(extendUnderline)
  }
]
}
