/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.html', 
            './index.html'],
  darkMode: 'selector',
  theme: {
    container: {
      center: true,
    },        
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#0d1d36', 
      'secondary':'#143272',
      'accent': '#FFD700',
      'accent-faint': '#fcf172',
      'accent-dull': '#ffde59',

      'primary-dark': '#0e1729', 
      'secondary-dark':'#013568',
      'accent-dark': '#806c00',

      'primary-faint': '#d6ecffff', 

      'black':'#000000',
      'dark-grey':'#e6efff',
      'grey': "#f9f9f9",
      'white': '#ffffff',
    },
  },
  plugins: [       
    function ({addUtilities}) {
      const extendUnderline = {
        '.underline': {
            'textDecoration': 'underline',
            'text-decoration-color': '#f7e018',
        },
      }
      addUtilities(extendUnderline)
  }
]
}
