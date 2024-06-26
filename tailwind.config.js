/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
"./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
'node_modules/flowbite-react/lib/esm/**/*.js'
  ],
  theme: {
    extend: {},
    colors: {
      'mainColor':'#7f007f'
    }
  },
  plugins: [ require('flowbite/plugin')],
}