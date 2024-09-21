/** @type {import('tailwindcss').Config} */
export default {
  content: ["*/**.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "Header-gray": "#4D4D4D",
        "Header-green": "#4CAF4F",
        "Hero-gray": "#F5F7FA",
        "Hero-ligth-gray": "#717171",
        "Footer-black": "#263238",
      },
      borderRadius: {
        App: "5.6px",
      },
    },
  },
  plugins: [],
};
