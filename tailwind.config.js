/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["*.{html,js}"],
  theme: {
    extend: {
      screens:{
        'sm':{'max':'640px'},
        'md':{'min':'641px'},
      },
    },
  },
  plugins: [],
}

