/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      dancing: ['Dancing Script', 'cursive'],
      marhey: ['Marhey', 'sans-serif'],
      roboto: ['Roboto', 'sans-serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

