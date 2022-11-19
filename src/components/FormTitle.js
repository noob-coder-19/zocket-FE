import { Divider, Grid, Typography } from "@mui/material";
import React from "react";

const FormTitle = (props) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={0.8}
      >
        <Grid item>
          <Typography variant="h6" sx={{ fontSize: "1rem", fontWeight: 700 }}>
            {props.title}
          </Typography>
        </Grid>

        <Grid item>
          <Typography
            variant="body1"
            sx={{ fontSize: "0.8rem", color: "rgba(0, 0, 0, 0.5)" }}
          >
            (Step {props.stepNum} of 4)
          </Typography>
        </Grid>
      </Grid>
      <Divider
        sx={{ border: "1px solid rgba(0, 0, 0, 0.1)", my: 1, mb: 3 }}
      ></Divider>
    </>
  );
};

export default FormTitle;
