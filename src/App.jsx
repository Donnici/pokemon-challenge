import React from "react";

import { ThemeProvider } from "styled-components";

import GlobalStyled from "assets/styles/globalStyled";
import { theme } from "assets/tokens/theme";

import Routes from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
