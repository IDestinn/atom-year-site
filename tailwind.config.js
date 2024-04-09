/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

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
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c0a96e",
          secondary: "#f0e4b0",
          accent: "#c0a96e",
          neutral: "#ffffff",
          "base-100": "#172163",
        },
      },
    ],
  },
};
