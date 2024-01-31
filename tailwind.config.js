/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins: ['Poppins', 'sans-serif']
      },
      screens:{
        'sm': '640px',
        'md': '1440px'
      },
      backgroundColor:{
        'primary': '#080808' 
      }
    },
  },
  plugins: [],
}

