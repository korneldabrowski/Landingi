/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: ['business', 'dark', 'cmyk', 'night'],
  },
  plugins: [require('daisyui')],
};
