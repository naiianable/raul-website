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
      'primary-blue': '#3283D2',
    },
    fontFamily: {
      serif: ['Merriweather', 'serif'],
      sans: ['Lato', 'sans-serif'],
    },
    screens: {
      mobile: { max: '767px' },
      tablet: { min: '768px', max: '1919px' },
      laptop: { min: '1920px' },
    },
    fontSize: {
      sm: '10px',
      //md: 16px displaying past neighboring div borders
      md: '14px',
      lg: '24px',
      xl: '36px',
      '2xl': '40px',
    },
    extend: {},
  },
  plugins: [],
};
