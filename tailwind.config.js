/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  darkMode: 'selector',
  theme: {
    extend: {
      animation: {
        "text-reveal": "text-reveal 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
        "opacity-reveal": "opacity-reveal 1.2s cubic-bezier(0.25, 1, 0.5, 1)",
      },
      keyframes: {

        "text-reveal": {
          "0%": {
            transform: "translate(0, 100%)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(0, 0)",
            opacity: 1,
          },
        },

      "opacity-reveal": {
          "0%": {
            opacity: 0.3,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
    },
    container: {
      center: true,
    },        
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#05306b', 
      'secondary':'#114794',
      'accent': '#ffe600',
      'accent-dull': '#ffde59',

      'primary-dark': '#011931', 
      'secondary-dark':'#013568',
      'accent-dark': '#806c00',

      'primary-faint': '#7aa0bfff', 

      'black':'#06183e',
      'grey': "#ffffff75",
      'white': '#F9F7F7',
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
