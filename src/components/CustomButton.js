import { Button } from "@mui/material";
import React from "react";

const CustomButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "rgba(15, 110, 255, 1)",
        borderRadius: "7px",
        width: "240px",
      }}
      onClick={props.callback}
    >
      {props.text}
    </Button>
  );
};

export default CustomButton;
