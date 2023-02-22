/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      width: {
        '250': '42rem',
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
