/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height:{
        'screen-login':'calc(100vh - 2.5rem )'
      },
     width:{
      'menu':'calc(100% - 2rem)'
     }
    },
  },
  plugins: [],
}