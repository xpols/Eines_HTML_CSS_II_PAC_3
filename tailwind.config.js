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
        'font-family-sans-serif': ['-apple-system']/*, 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol']*/
      }
    },
  },
  plugins: [],
}