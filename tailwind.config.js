/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        recoleta: ["recoleta", "sans-serif"],
        Outfit: ["Outfit", "sans-serif"],
      },
      colors: {
        primary: "#28574E",
        dark: "#1e232f",
        "slate-gray": "#757575",
        "ghost-white": "#F9F9F9",
      },
    },
  },
  plugins: [],
};
