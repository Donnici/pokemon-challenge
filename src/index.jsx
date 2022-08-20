import React from "react";
import ReactDOM from "react-dom";

import { LocaleProvider } from "contexts/Locale";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <LocaleProvider defaultLanguage='ptBr'>
      <App />
    </LocaleProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
