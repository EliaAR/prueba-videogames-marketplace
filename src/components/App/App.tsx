import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../config/theme";
import { User } from "../User/User";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <User />
    </ThemeProvider>
  );
}

export default App;
