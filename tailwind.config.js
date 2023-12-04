/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue,*}"],
  theme: {
    screens: {
      "3xs": "360px",
      "2xs": "400px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        myWhite: "#FAFFFD",
        myDark: "#0C0C0C",
        myGray: {
          100: "#A0AAB2",
          200: "#C2C8C1",
        },
      },
      fontFamily: {
        primary: "Cabinet",
        primaryBold: "CabinetBold",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
