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
      'primary': '#1064a9ff', 
      'secondary':'#162f66ff',
      'accent': '#e9d587',
      'accent-dull': '#ffde59',

      'primary-dark': '#283b54', 
      'secondary-dark':'#203045',
      'accent-dark': '#806c00',

      'primary-faint': '#7aa0bfff', 

      'black':'#161717FF',
      'grey': "#e0e3e9ff",
      'white': '#F0F2F6FF',
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
