/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        main:'#e7c5e6',
        text:'#3a2a30',
        secondary:'#ffeefe',
      }
    },
  },
  plugins: [],
}