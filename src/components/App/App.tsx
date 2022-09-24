import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../config/theme";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <p>holi</p>
    </ThemeProvider>
  );
}

export default App;
