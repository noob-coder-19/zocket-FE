import { Grid, Typography } from "@mui/material";
import React from "react";

const FirstStepEntry = (props) => {
  let { img, title, simg, selected, desc, imgSize } = props;

  //   selected = !selected;
  const imgLink = selected ? simg : img;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{
        border: `2px solid ${
          selected ? "rgba(15, 110, 255, 1)" : "rgba(223, 223, 223, 1)"
        }`,
        p: 2,
        borderRadius: "10px",
        backgroundColor: `${selected ? "rgba(231, 240, 255, 0.3)" : "white"}`,
      }}
    >
      <Grid item sx={{ width: imgSize, height: imgSize }}>
        <img src={imgLink} alt="" style={{ width: "100%", height: "100%" }} />
      </Grid>

      <Grid item sx={{ ml: 1 }}>
        <Typography variant="body1">{title}</Typography>
        <Typography
          variant="body1"
          sx={{ fontSize: "0.7rem", color: "rgba(183, 183, 183, 1)" }}
        >
          Rs. {desc}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FirstStepEntry;
