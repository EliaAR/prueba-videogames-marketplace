import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7D00E2",
      light: "rgba(125, 0, 226, 0.16)",
    },
    secondary: {
      main: "#f7f7f7",
    },
    text: {
      primary: "#303030",
      secondary: "#4E4E4E",
    },
    background: {
      default: "#F1F1F1",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: "'Ubuntu','Lato', sans-serif",
    body1: {
      fontFamily: "'Lato', sans-serif",
    },
    body2: {
      fontFamily: "'Lato', sans-serif",
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 700,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow:
            "0px 2px 4px rgba(0, 0, 0, 0.14), 0px 3px 4px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)",
        },
      },
    },
  },
});

export { theme };
