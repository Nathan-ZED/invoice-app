/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
        'mainPurple': '#7C5DFA',
        'lightPurple': '#9277FF',
        'veryDark': '#1E2139',
        'lightDark': '#252945',
        'lightBlueGrey': '#DFE3FA',
        'grey': '#888EB0',
        'blueGrey': '#7E88C3',
        'dark': '#0C0E16',
        'red': '#EC5757',
        'lightRed': '#9277FF',
        'white': '#F8F8FB',
        'fullWhite': '#ffff',
        'secondVeryDark': '#141625',
        'lightGreen': 'rgba(51, 214, 159, .15)',
        'green': '#33D69F',
        'lightOrange': 'rgba(255, 143, 0, .15)',
        'orange': '#FF8F00',
    },
    extend: {},
  },
  plugins: [],
}
