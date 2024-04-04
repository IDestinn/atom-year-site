/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "atom-blue": "#172163",
        "atom-gold": "#c0a96e",
        "atom-light-blue": "#1e2973",
        "atom-light-gold": "#f0e4b0",
        "atom-blue-20": "#172269",
      },
    },
  },
  plugins: [],
};
