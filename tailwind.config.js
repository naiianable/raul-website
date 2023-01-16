/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'primary-gray': '#444444',
      'primary-blue': '#98B8D7',
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  plugins: [],
};
