const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  darkMode: false, // or 'media' or 'class'
  purge: ['./src/**/*.html', './src/**/*.js', './public/index.html'],
  plugins: [require('@tailwindcss/forms')],
};
