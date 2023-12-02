import React from "react";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

import AppContainer from "./layouts/index";

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline>
        <AppContainer />
      </CssBaseline>
    </BrowserRouter>
  );
};
