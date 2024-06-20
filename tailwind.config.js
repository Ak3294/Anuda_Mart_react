/** @type {import('tailwindcss').Config} */
export default {
  // content: [
  //   "./src/**/*.{js,jsx,ts,tsx,html,css}",
  // ],
  content: ["./src/**/*.{html,jsx,}"],

  screens: {
    sm: "640px",
    md: "1024px",
    lg: "1280px",
  },

  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
