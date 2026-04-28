/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: {
          950: '#151512',
          900: '#1d1e1a',
          850: '#272820',
          800: '#33342a',
          700: '#47483d',
          100: '#efeee7',
        },
        olive: {
          900: '#303720',
          800: '#3f4a2a',
          700: '#55633a',
          600: '#6c7b4a',
          100: '#e8ebdc',
        },
        champagne: {
          500: '#b6a26d',
          400: '#cbb987',
          100: '#eee6d0',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 24px 80px rgba(18, 18, 14, 0.12)',
      },
    },
  },
  plugins: [],
};
