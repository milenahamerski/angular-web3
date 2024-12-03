/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // Isso garante que todas as classes em arquivos .html e .ts dentro do src sejam consideradas
  ],
  theme: {
    extend: {
      colors: {
        'chalk': '#342E2E',
        'orange': '#C07A47',
        'sand': '#9A8362',
        'blue': '#2D7D89',
        'light-gray': '#AFAB9A',
      },
      fontFamily: {
        italiana: ['Italiana', 'sans-serif'],
        akatab: ['Akatab', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
