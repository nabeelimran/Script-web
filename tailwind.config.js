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
      gray2: "#151515",
      darkBlue: "#060910",
      grey: {
        1: "#101011",
      },
      blue: {
        1: "#11151F",
        2: "#09090A",
        3: "#121215",
        4: "#5F6978",
      },
      shade: {
        "dark-blue": "#10131A",
        "dark-blue-2": "#15171C",
        "darkest-blue": "#0B0B0D",
        grayis: "#161616",
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
      backgroundImage: {
        televisionGradient:
          "linear-gradient(180.16deg, #09090A 0.14%, #1F242E 118.5%)",
        yellowGradient:
          "linear-gradient(45deg, #FFAB09 14.64%, #FFEF00 85.36%)",
        bulletBG:
          "linear-gradient(180deg, #CA5101 0%, #DE7701 45.31%, #F7A402 100%)",
      },
      borderWidth: {
        "1px": "1px",
      },
    },
  },
  plugins: [],
};
