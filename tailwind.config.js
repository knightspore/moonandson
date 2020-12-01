module.exports = {
  purge: {
    enabled: false,
    content: [
      './layout/*.liquid',
      './templates/*.liquid',
      './sections/*.liquid',
      './snippets/*.liquid',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui']
      },
      colors: {
        'fuchsia': {
          '50': '#f8f7fd', 
          '100': '#f0effb', 
          '200': '#dad6f4', 
          '300': '#c4bded', 
          '400': '#988ce0', 
          '500': '#6c5ad3', 
          '600': '#6151be', 
          '700': '#51449e', 
          '800': '#41367f', 
          '900': '#352c67'
      }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
