module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        defaultColor: "#0DB9E9",
      },
      fontFamily:{
        opensans: ['Open Sans', 'sans-serif']
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
