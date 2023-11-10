/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      extend: {
        screens: {
          'sm-md': {'min': '360px', 'max': '640px'},
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

