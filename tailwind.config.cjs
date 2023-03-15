/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "gray-dark": "#1C1A1A",
        "gray-mid": "#3E3E3E",
        "gray-light-200": "#3E3E3E",
        "gray-light-100": "#EBEBEB",
        "title-gray": "#D6D6D6",
        "red-dark": "#740303",
      },
    },
  },
  plugins: [],
};
