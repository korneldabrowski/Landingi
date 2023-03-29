/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['cupcake', 'dark', 'cmyk', 'night'],
  },
  plugins: [require('daisyui')],
};
