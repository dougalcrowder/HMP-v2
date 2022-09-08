const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.html', './src/**/*.md'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Marr Sans True Web', ...defaultTheme.fontFamily.sans],
        plex: ['ibm-plex-sans-condensed', ...defaultTheme.fontFamily.sans],
      },
      gridTemplateRows: {
        // Simple 8 row grid
        '12': 'repeat(12, minmax(0, 1fr))',
      }
    },
    colors: {
      background: '#EEEDED',
      bookingbg: '#DDD8CD',
      hmplightgrey: '#6C757D',
      hmpgrey: '#3F494E',
      blackish: '#212529',
      whiter:'#ffffff',
    }
  },
  variants: {},
  plugins: [require('@tailwindcss/typography')],
};
