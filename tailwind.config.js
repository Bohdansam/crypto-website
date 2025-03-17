/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx,scss}",
      "./public/index.html"
  ],
  theme: {
      extend: {
          colors: {
              cryptoWhite: "#FFFFFF",
              cryptoGray: "#B1B5C3",
              cryptoGray2: "#222630",
              cryptoRed: "#D33535",
              cryptoGreen: "#58BD7D",
              cryptoBlue: "#222630",
              cryptoBG1: "#141416",
              cryptoBG2: "#18191D",
          },
          fontFamily: {
              sans: ['DM Sans', 'sans-serif'],
          },       
      },
  },
  plugins: [],
}