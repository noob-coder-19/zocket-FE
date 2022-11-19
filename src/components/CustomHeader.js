import { Grid, Typography } from "@mui/material";
import React from "react";

const CustomHeader = (props) => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-end"
        alignItems="flex-start"
      >
        <Grid item>
          <Typography variant="h4">{props.heading}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body1" color="rgba(0, 0, 0, 0.5)">
            {props.detail}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default CustomHeader;
