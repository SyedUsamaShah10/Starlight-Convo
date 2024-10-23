/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DynaPuff", "sans-serif"],
      },
      colors: {
        "deep-blue": "#2d446d",
        "navy-blue": "#004080",
        "light-blue": "#0059b3",
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require("daisyui"),
  ],
};
