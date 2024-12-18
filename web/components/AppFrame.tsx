"use client";

import React from "react";
import { Box, CssBaseline } from "@mui/material";
import TopBar from "@/components/TopBar";

interface AppFrameProps {
  children: React.ReactNode;
}

const AppFrame: React.FC<AppFrameProps> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <TopBar />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {children}
      </Box>
    </>
  );
};

export default AppFrame;
