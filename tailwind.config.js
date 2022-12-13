/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
           '0%, 100%': { top: '0' },
          '50%': { top: '5px' },
        }
      },
      animation: {
        slide: 'slide .2s 1 linear',
      }
    },
  },
  mytheme: {

    "primary": "#4e309f",

    "secondary": "#9c8ae0",

    "accent": "#ffc4d3",

    "neutral": "#2D2135",

    "base-100": "#B1B0C0",

    "console-dark-grey": "#8E8B9E",

    "info": "#9EBAF5",

    "success": "#2BCABA",

    "warning": "#F2BE50",      

    "error": "#EC6969",

    'console-purple': 'rgb(78, 48, 159)',

            },
  plugins: [require("daisyui")],
}
