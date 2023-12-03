import React from "react";

import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Layout from "./layout";

const theme = createTheme({
  typography: {
    fontFamily: ['"Barlow Semi Condensed"', "Arial", "sans-serif"].join(","),
  },
});

export const App = () => {
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </CssBaseline>
  );
};
