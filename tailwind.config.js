/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: "#9C9C9C",
        lightblue: "#DBE3FF"
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
