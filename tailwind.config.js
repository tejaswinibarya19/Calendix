/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,mdx}",
      
  ],
  theme: {
    container:{
      center:true,
      padding:'2rem',
      screens:{
        xs:'600px'
      },
    },
    extend: {},
  },
  plugins: [],
}
