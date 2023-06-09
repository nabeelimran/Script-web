import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ffef00",
      contrastText: "#131313",
    },
    secondary: {
      // main: "#3c58ee",
      main: "#FF38DC",
    },
    background: {
      default: "#000000",
      paper: "#0C0C0C",
    },
    text: {
      secondary: "#e5e5e5",

      disabled: "#2f2f2f",
    },
    grey: {
      400: "#717171",
      500: "#909090",
      600: "#1F1F1F",
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontSize: 16,
    fontFamily: "Outfit, sans-serif",
    d0: {
      fontSize: "6.25rem", // 100px
      fontWeight: 500,
      display: "block",
    },
    d1: {
      fontSize: "3.125rem", // 50px
      fontWeight: 500,
      display: "block",
    },
    d2: {
      fontSize: "2.5rem", // 40px
      fontWeight: 500,
      display: "block",
    },
    d3: {
      fontSize: "2.25rem", // 36px
      fontWeight: 500,
      display: "block",
    },
    h1: {
      fontSize: "1.5rem", // 24px
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.25rem", // 20px
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
    },
    h5: {
      fontSize: "1rem", // 16px
      fontWeight: 600,
      lineHeight: 2,
    },
    subtitle1: {
      fontSize: "1.25rem", // 20px
      fontWeight: 500,
    },
    subtitle2: {
      fontSize: "1.125rem", // 18px
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem", // 16px
      fontWeight: 400,
    },
    body2: {
      fontSize: "0.875rem", // 14px
      fontWeight: 400,
      lineHeight: 2,
    },
    button: {
      fontSize: "1rem", // 16px
      fontWeight: 500,
    },
    caption: {
      fontSize: "0.75rem", // 12px
      fontWeight: 400,
    },
    overline: {
      fontSize: "0.688rem", // 11px
      fontWeight: 400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 750,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

theme = responsiveFontSizes(theme);

export { theme };
