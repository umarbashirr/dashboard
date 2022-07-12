/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-gray": "#f5f4f5",
        "light-dark": "#42424a",
        "high-dark": "#191919",
        "very-light-dark": "#c7c7c7",
      },
    },
  },
  plugins: [],
};
