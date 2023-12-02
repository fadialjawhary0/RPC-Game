import React from "react";
import { BrowserRouter } from "react-router-dom";

import { CssBaseline } from "@mui/material";
import RPC from "./views/RPC/components/RPC";

export const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline>
        <RPC />
      </CssBaseline>
    </BrowserRouter>
  );
};
