/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      backgroundColor: ["responsive", "odd", "even", "hover", "focus"],
    },
  },
  theme: {
    extend: {
      colors: {
        primary: "#00acc1",
        secondary: "#1d1e20",
        dark: "#0f0f0f",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(circle,  var(--tw-gradient-stops))",
      },
      boxShadow: {
        movieTrendingHover: "inset 0 0 80px #00acc1",
        movieTrending: "inset 20px 10px 90px #0f0f0f",
        poster: "inset 0 -15vh 100px 0px #00acc1",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
    },
  },
  plugins: [],
};
