// eslint-disable-next-line
const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#010208',
        'white': '#ffffff',
        'gray': '#E3E4E68C',
        'neutral': '#E3E4E6',
        'buttonBorder': '#E3E4E68C'
      },
      fontFamily: {
        'poppins': ['"Poppins"'],
      }
    },

  },
  darkMode: "class",
  plugins: [nextui()],
};
