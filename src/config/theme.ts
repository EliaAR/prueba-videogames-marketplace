import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8c7ed0",
    },
    secondary: {
      main: "#7d894a",
    },
    text: {
      primary: "#7D00E2",
      secondary: "#303030",
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
});

export { theme };
