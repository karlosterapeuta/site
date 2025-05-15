/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#B3E0FF', // Azul pastel
          DEFAULT: '#8EC5FC', // Azul principal
          dark: '#6B9ED9', // Azul escuro
        },
        secondary: {
          light: '#D8BFD8', // Lilás pastel
          DEFAULT: '#C9A0DC', // Lilás principal
          dark: '#A67BB5', // Lilás escuro
        },
        accent: {
          light: '#C1F0C1', // Verde pastel
          DEFAULT: '#98FB98', // Verde principal
          dark: '#77DD77', // Verde escuro
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '24px',
        '3xl': '28px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
};
