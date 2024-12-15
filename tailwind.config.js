/** @type {import('tailwindcss').Config} */
module.exports = {
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
      'primary': '#143272', 
      'secondary':'#1E3056',
      'accent': '#ddc700',
      'accent-dull': '#ffde59',

      'primary-dark': '#0e1729', 
      'secondary-dark':'#013568',
      'accent-dark': '#806c00',

      'primary-faint': '#7aa0bfff', 

      'black':'#201f1f',
      'dark-grey':'#6a6a6c',
      'grey': "#f4f4f4",
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
