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
      'primary': '#105893', 
      'secondary':'#1574C1',
      'accent': '#f3d403',
      'accent-dull': '#D2CA41',

      'primary-dark': '#111827', 
      'secondary-dark':'#374151',
      'accent-dark': '#e4e4e4',

      'black':'#090909',
      'white': '#ffffff',
    },
  },
  plugins: [       
    function ({addUtilities}) {
    const extendUnderline = {
        '.underline': {
            'textDecoration': 'underline',
            'text-decoration-color': '#f3d403',
        },
    }
    addUtilities(extendUnderline)
}
]
}
