import React from "react";

import { Avatar, Box } from "@mui/material";

import { Assets } from "../../../constants/assets.const.mjs";

const GameBoard = () => {
  const outerLayerDefaultStyles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    width: "9rem",
    height: "9rem",
    borderRadius: "50%",
    cursor: "pointer",
  };

  const innerLayerDefaultStyles = {
    backgroundColor: "#e4e4e4",
    boxShadow: "0 -6px 0 #b8b8b8",
    width: "7rem",
    height: "7rem",
    top: "4px",
    borderRadius: "50%",
    ":active": {
      boxShadow: "0 -4px 0 #b8b8b8",
      top: "2px",
    },
  };

  return (
    <Box sx={{ position: "relative" }}>
      <img src={Assets?.triangle?.icon} />
      <Box
        sx={{
          ...outerLayerDefaultStyles,
          left: "-1rem",
          top: "-2rem",
          background: "radial-gradient(hsl(230, 89%, 62%), hsl(230, 89%, 65%))",
          boxShadow: "0 6px 0 #2a46c2",
        }}
      >
        <Avatar sx={{ ...innerLayerDefaultStyles }}>
          <img src={Assets?.paper?.icon} />
        </Avatar>
      </Box>

      <Box
        sx={{
          ...outerLayerDefaultStyles,
          right: "-1rem",
          top: "-2rem",
          background: "radial-gradient( hsl(39, 89%, 49%), hsl(40, 84%, 53%))",
          boxShadow: "0 6px 0 #c46b19",
        }}
      >
        <Avatar sx={{ ...innerLayerDefaultStyles }}>
          <img src={Assets?.scissors?.icon} />
        </Avatar>
      </Box>

      <Box
        sx={{
          ...outerLayerDefaultStyles,
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(hsl(349, 71%, 52%), hsl(349, 70%, 56%))",
          boxShadow: "0 6px 0 #9d1730",
        }}
      >
        <Avatar sx={{ ...innerLayerDefaultStyles }}>
          <img src={Assets?.rock?.icon} />
        </Avatar>
      </Box>
    </Box>
  );
};

export default GameBoard;
