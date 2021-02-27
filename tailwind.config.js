module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        lato: ["Lato", "system-ui"],
      },
      colors: {
        themeGray: {
          DEFAULT: "#181818",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
