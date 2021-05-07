import { ThemeProvider } from "@material-ui/styles";
import React from "react";
import Home from "./pages/Home";
import Theme from "./themes/theme";

export default function App() {
  return (
    <div>
      <ThemeProvider theme={Theme}>
        <Home />
      </ThemeProvider>
    </div>
  );
}
