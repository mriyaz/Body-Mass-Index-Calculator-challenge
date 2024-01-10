/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "blue-gray-gradient": "linear-gradient(290.1deg,#D6E6FE 0%,rgba(214,252,254,0) 100%)",
      },
      boxShadow:{
        'custom': 'blue-gray-gradient 0px 7px 29px 10px',
        
      }
    },
  },
  plugins: [],
}

