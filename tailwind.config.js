module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        'bounce-slow':'bounce 5s ease-in-out infinite',
      } 
    },
  },
  variants: {
    extend: {
      translate: ['responsive', 'hover', 'focus'],
      borderWidth: ['hover', 'focus'],
    },
    
  },
  plugins: [],
}
