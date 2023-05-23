/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'myYellow': '#D5FF40',
        'myBlue': {
          '100' : '#3A53E3',
        },
        'myDark': {
          '100': '#101010',
          '200': '#171717',
          '300': '#29282B'
        },
        'myGray': {
          '100': '#F8F8F8',
          '200': '#C4C4C4',
        },
      }
    },
  },
  plugins: [],
}

