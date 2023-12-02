import React from "react";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline></CssBaseline>
    </BrowserRouter>
  );
};
