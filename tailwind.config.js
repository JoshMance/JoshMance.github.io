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
      'secondary':'#0a3f99',
      'accent': '#FFD700',

      'primary-dark': '  #0a1b36', 
      'secondary-dark':'#082a66',
      'accent-dark': '#BFA100',

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
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
            'textDecoration': 'underline',
            'text-decoration-color': '#f7e11879',
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
