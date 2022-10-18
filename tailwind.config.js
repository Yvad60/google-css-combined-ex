/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary_gray: '#f2f2f2',
        secondary_gray: '#dadce0',
        primary_dark: '#3c4043',
        secondary_dark: '#70757a',
        dark_gray: '#adb2b7',
        primary_blue: '#4285f4;',
        primary_dark_blue: '#1a73e8',
        secondary_dark_blue: '#1a0dab',
        light_gray: '#f8f9fa',
      },
      fontFamily: {
        Roboto: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        xsm: '0.813rem',
      },
      boxShadow: {
        main: '0 1px 6px rgb(32 33 36 / 28%)',
      },
    },
  },
  plugins: [],
};
