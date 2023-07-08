/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Dela: ["Dela Gothic One"],
        Oi: ["Oi-Regular"],
      },
      width: {
        100: "36rem",
        110: "48rem",
        128: "64rem",
      },
    },
  },
  plugins: [],
};
