/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      screens: {
        xs: "420px",
        "3xl": "1632px",
      },
    },
  },
  plugins: [],
};
