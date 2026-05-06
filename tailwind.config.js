/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
          dark: '#121212',
          gold: '#D4AF37',
          goldHover: '#C5A021',
          light: '#E5E7EB',
          darker: '#0a0a0a'
      },
      fontFamily: {
          serif: ['"Playfair Display"', 'serif'],
          sans: ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
          'hero-gradient': 'linear-gradient(to bottom, rgba(18, 18, 18, 0.4) 0%, rgba(18, 18, 18, 1) 100%)',
      }
    },
  },
  plugins: [],
}
