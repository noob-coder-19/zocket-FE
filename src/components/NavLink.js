import { Box, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";

const NavLink = (props) => {
  let { selectImg, img, text, selected } = props;

  img = selected ? selectImg : img;

  return (
    <Grid
      item
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        py: 2,
        borderColor: "#1977F3",
        borderWidth: "0px 0px 0px 0px",
        width: "100%",
        borderStyle: "solid",
        borderLeft: selected ? "4px solid #1977F3" : "0px",
      }}
    >
      <Grid item>
        <Box sx={{ width: "80%" }}>
          <CardMedia
            component="img"
            src={img}
            alt="logo"
            sx={{ width: "100%", objectFit: "cover" }}
          ></CardMedia>
        </Box>
      </Grid>

      <Grid item>
        <Typography color="white" variant="body2">
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default NavLink;
