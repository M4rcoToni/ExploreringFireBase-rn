/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/**.tsx",
    "./src/components/Controllers/**.tsx",
    "./src/components/Forms/**.tsx",
    "./src/components/Forms/SiginForm/*.tsx",
    "./src/components/Forms/AccountForm/*.tsx",
    "./src/screens/**.tsx"
  ],
  theme: {
    extend: {
      colors: {
        appwhite: {
          100: '#FFFFFF',
          200: '#EDEDED'
        },
        appgreen: {
          200: '#00FFB9',
          300: '#00D699'
        },
        appgray: {
          300: '#969495'
        }
      }
    },
  },
  plugins: [],
}
