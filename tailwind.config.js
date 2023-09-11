/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      edit:'#007BFF',
      delete: '#FF0000',
      add: '#28A745',
      submit: ''

    },
    extend: {
        },
  },
  plugins: [require("daisyui")],
}