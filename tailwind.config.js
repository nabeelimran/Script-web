/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      outfit: "'Outfit', sans-serif;",
    },
    colors: {
      white: "white",
      black: "black",
      transparent: "transparent",
      primary: "#FFEF00",
      darkGray: "#1C1C1C",
      gray: "#646464",
      darkBlue: "#060910",
      shade: {
        "dark-blue": "#10131A",
        "dark-blue-2": "#15171C",
        "darkest-blue": "#0B0B0D",
      },
    },
    lineHeight: {
      1: 1,
      "1_1": 1.1,
      "1_2": 1.2,
      "1_3": 1.3,
      "1_4": 1.4,
      "1_5": 1.5,
      "1_6": 1.6,
      "1_7": 1.7,
      "1_8": 1.8,
      "1_9": 1.9,
    },
    extend: {
      fontSize: {
        "90px": "90px",
      },
    },
  },
  plugins: [],
};
