import { Button } from "@mui/material";
import React from "react";

const StatusButton = (props) => {
  const bgc = {
    "Live now": "#E1FFE0",
    Paused: "#FFF8E0",
    Exhausted: "#FFDEDE",
  };

  const color = {
    "Live now": "rgba(49, 124, 46, 1)",
    Paused: "rgba(209, 163, 7, 1)",
    Exhausted: "rgba(252, 63, 63, 1)",
  };

  return (
    <Button
      sx={{
        px: 2,
        py: 0.7,
        borderRadius: "15px",
        color: color[props.text],
        backgroundColor: bgc[props.text],
        "&.MuiButtonBase-root:hover": {
          bgcolor: bgc[props.text],
        },
      }}
      variant="contained"
      disableElevation
      disableRipple
      disableFocusRipple
      size="small"
    >
      {props.text}
    </Button>
  );
};

export default StatusButton;
