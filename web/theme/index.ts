"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#DD1438" },
    secondary: { main: "#6A737C" },
    background: {
      default: "#1D2A3A",
      paper: "rgb(24, 26, 27)",
    },
    divider: "rgba(140, 130, 115, 0.12)",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
        },
      },
    },
  },
});

export default theme;
