/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '320px',

        'md': '540px',

        'lg': '720px',

        'xl': '990px',

        '2xl': '1140px'
      },
      colors: {
        'white': '#ffffff',
        'corporate': '#000078',
        'yellow': '#BDBD09'
      },
      fontFamily: {
        'custom': ['cf_revolutionregular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}