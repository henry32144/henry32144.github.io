/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgImage: "url('../images/background.jpg')", // Updated path
        darkBgImage: "url('../images/dark-background.jpg')", // Updated path
      },
      colors: {
        "dark-icon-bg": "#222425",
      },
    },
  },
  plugins: [],
};
