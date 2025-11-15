const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        background: '#FBFBF8',
        forest: '#1B221E',
        text: '#222B26',
        'text-light': '#FBFBF8',
        'brand-green': '#3E8948',
        'brand-green-light': '#5DAA68',
        'accent-innovator': '#F5B740',
        'accent-earth': '#D2B48C'
      },
      fontFamily: {
        heading: ['\"Poppins\"', 'sans-serif'],
        sans: ['\"Josefin Sans\"', 'sans-serif']
      },
      boxShadow: {
        card: '0 20px 35px rgba(34, 43, 38, 0.08)'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.clip-shield': {
          clipPath:
            'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)'
        }
      });
    })
  ]
};
