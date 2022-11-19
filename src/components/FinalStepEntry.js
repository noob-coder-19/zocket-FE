import { Box } from "@mui/material";
import React from "react";

const FinalStepEntry = (props) => {
  const { imgLink, selected } = props;

  return (
    <Box
      sx={{
        border: `2px solid ${
          selected ? "rgba(15, 110, 255, 1)" : "rgba(223, 223, 223, 1)"
        }`,
        borderRadius: "10px",
      }}
    >
      <img src={imgLink} alt="" />
    </Box>
  );
};

export default FinalStepEntry;
