module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /* https://colordesigner.io/#0D1C33-17373C-2B6832-4F9300-A1D700 */
    colors: {
      white: "#000000",
      black: "#0D1C33",
      "green-100": "#17373C",
      "green-200": "#2B6832",
      "green-300": "#4F9300",
      "green-400": "#A1D700",
      "blue-100": "#0067A6",
      "blue-200": "#0D1C33",
      "gray-100": "#8C8C8C",
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
      ],
      // TODO add custom serif font
      serif: ["serif"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
