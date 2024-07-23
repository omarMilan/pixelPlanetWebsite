/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px", // Small screens, like phones
      md: "768px", // Medium screens, like tablets
      lg: "1024px", // Large screens, like laptops
      xl: "1280px", // Extra large screens, like desktops
      pResOne: "428px",
      pResTwo: "320px",
    },
    extend: {
      colors: {
        customBlack: "#1B1919",
        customOrange: "#FFAA65",
        customPurple: "#96B2FD",
      },
      fontFamily: {
        headerFont: ["Inria Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
