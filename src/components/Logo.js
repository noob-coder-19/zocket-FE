import { Box, CardMedia } from "@mui/material";
import React from "react";

const Logo = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "40%" }}>
        <CardMedia
          component="img"
          image="https://i.ibb.co/MZccW19/Frame.png"
          alt="logo"
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default Logo;
