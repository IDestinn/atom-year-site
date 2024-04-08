/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        atom: {
          blue: "#172163",
          gold: "#c0a96e",
          "light-blue": "#1e2973",
          "light-gold": "#f0e4b0",
          "blue-20": "#172269",
        },
      },
    },
  },
  plugins: [],
};
