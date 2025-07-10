/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fade-in 1s ease forwards',
        'slide-up': 'slide-up 1s ease forwards',
        'blob': 'blob 7s infinite alternate',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
        '84': '21rem',
        '96': '24rem',
      },
    },
  },
  plugins: [],
};