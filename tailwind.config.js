/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#DF0001',
        'primary-light': '#D16868',
        secondary: '#A142FA',
        accent: '#43FC61',
        dark: '#0D0D0D',
        'white-full': '#FFFFFF',
        emphasys: '#6F4A29',
        'emphasys-light': '#C59D5F',
      },
      fontFamily: {
        serif: ['Noto Serif Display', 'serif'],
        cursive: ['April June', 'cursive'],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        arual: ['Arual Light', 'sans-serif'],
        cormorant: ['Cormorant', 'sans-serif'],
        larsseit: ['Larsseit', 'sans-serif'],
        garamond: ['Cormorant Garamond', 'sans-serif'],
      },
      spacing: {
        22: '5.5rem',
      },
    },
  },
  plugins: [],
};
