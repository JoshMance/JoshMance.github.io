/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.html', 
            './index.html'],
  darkMode: 'selector',
  theme: {
    extend: {
      backgroundImage: {
        'light': "url('/src/images/bg_desktop.jpg')",
        'dark': "url('/src/images/bg_desktop_dark.jpg')",
      },
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
      'primary': '#0f172a', 
      'secondary':'#0f172a',
      'accent': '#EDE212FF',
      'accent-dull': '#D2CA41',

      'primary-dark': '#283b54', 
      'secondary-dark':'#203045',
      'accent-dark': '#806c00',

      'black':'#161717FF',
      'grey': "#7e899d",
      'white': '#d7dfec',
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
