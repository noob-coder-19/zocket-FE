import { Grid, Typography } from "@mui/material";
import React from "react";

const CampaignEntry = (props) => {
  const { title, desc, img } = props;
  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      gap={1}
    >
      <Grid item>
        <img src={img} alt="img" width="60px" height="60px" />
      </Grid>

      <Grid item>
        <Typography variant="body2" sx={{ fontSize: "1rem", mb: 0.8 }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
          {desc}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default CampaignEntry;
