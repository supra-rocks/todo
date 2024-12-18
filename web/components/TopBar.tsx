"use client";

import React from "react";
import { Box } from "@mui/material";
import ConnectButton from "@/components/ConnectButton";

const App: React.FC = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 16,
        right: 16,
        display: "flex",
        alignItems: "center",
        gap: 1,
      }}
    >
      <ConnectButton />
    </Box>
  );
};

export default App;
