import React from "react";

import { Box } from "@mui/material";

import Header from "./Header";

const RPC = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        background: "radial-gradient(hsl(214, 47%, 23%), hsl(237, 49%, 15%))",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "2rem",
      }}
    >
      <Header />
    </Box>
  );
};

export default RPC;
