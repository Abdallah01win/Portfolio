/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,*}",
  ],
  theme: {
    extend: {
      colors:{
        'myYellow': '#D5FF40',
        'myBlue': {
          '100' : '#3A53E3',
          '200' : '#2C7FDD',
          '300' : '#01BAEF',
        },
        'myDark': {
          '100': '#0C0C0C',
          '200': '#171717',
          '300': '#1D201F',
          '400': '#29282B'
        },
        'myGray': {
          '100': '#F8F8F8',
          '200': '#C4C4C4',
          '300': '#D1DEDE',
          '400': '#A0AAB2',
          '500': '#969696',
          '600': '#E2E4F3',
        },
        'myWhite': '#FAFFFD'
      },
      fontFamily:{
        "Inter" : "Inter, sans"
      }
    },
  },
  plugins: [],
}

