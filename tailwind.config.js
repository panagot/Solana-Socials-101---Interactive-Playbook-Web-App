/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        solana: {
          purple: '#9945FF',
          green: '#14F195',
          dark: '#1A1A2E',
        },
        ireland: {
          green: '#169B62',
          white: '#FFFFFF',
          orange: '#FF883E',
        },
      },
      backgroundImage: {
        'gradient-solana': 'linear-gradient(135deg, #9945FF 0%, #14F195 100%)',
      },
    },
  },
  plugins: [],
}

