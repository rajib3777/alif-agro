
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#071b12',
        panel: '#0b2a1c',
        leaf: '#0f3b27',
        lime: '#9BE15D',
        gold: '#D8B85A',
        mist: '#cfe7d7'
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.25)'
      },
      borderRadius: {
        xl2: '1.25rem'
      }
    },
  },
  plugins: [],
}
