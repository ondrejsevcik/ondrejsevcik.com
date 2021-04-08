module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Nunito Sans", "sans-serif"],
      // serif: ["serif"], // ATM I don't use any serif
      mono: ["Source Code Pro", "monospace"],
    },
    /* https://colordesigner.io/#0D1C33-17373C-2B6832-4F9300-A1D700 */
    colors: {
      "blue-100": "#D5EBFF",
      "blue-200": "#ABD8FF",
      "blue-300": "#81C4FF",
      "blue-400": "#57B1FF",
      "blue-500": "#2D9DFF",
      "blue-600": "#0389FF",
      "blue-700": "#0073D8",
      "blue-800": "#005DAE",
      "blue-900": "#004684",

      "gray-50": "#F9FAFB",
      "gray-100": "#F3F4F6",
      "gray-200": "#E5E7EB",
      "gray-300": "#D1D5DB",
      "gray-400": "#9CA3AF",
      "gray-500": "#6B7280",
      "gray-600": "#4B5563",
      "gray-700": "#374151",
      "gray-800": "#1F2937",
      "gray-900": "#111827",

      "yellow-100": "#FEF8E5",
      "yellow-200": "#FEF1CB",
      "yellow-300": "#FDEBB2",
      "yellow-400": "#FDE498",
      "yellow-500": "#FCDD7E",
      "yellow-600": "#FCD664",
      "yellow-700": "#FBCF4B",
      "yellow-800": "#FBC831",
      "yellow-900": "#FAC217",
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
