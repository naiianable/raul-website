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
      sans: ['Lato', 'sans-serif'],
    },
    screens: {
      sm: { max: '360px' },
      md: { min: '361px', max: '768px' },
      lg: { min: '769px' },
    },
    fontSize: {
      sm: '10px',
      md: '16px',
      lg: '24px',
      xl: '36px',
      '2xl': '40px',
    },
    extend: {},
  },
  plugins: [],
};
