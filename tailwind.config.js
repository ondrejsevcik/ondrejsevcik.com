module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /* https://colordesigner.io/#0D1C33-17373C-2B6832-4F9300-A1D700 */
    colors: {
      "blue-100": "#0067A6",
      "blue-200": "#0D1C33",
      "gray-100": "#F9F9F9",
      "gray-200": "#8C8C8C",
    },
    fontFamily: {
      sans: [
        "-apple-system",
        "BlinkMacSystemFont",
        "Segoe UI",
        "Helvetica",
        "Arial",
      ],
      serif: ["serif"],
      code: ["SFMono-Regular", "Consolas", "monospace"],
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
