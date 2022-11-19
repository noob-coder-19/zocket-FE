import { Avatar, Button, Grid, Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const UserAvatar = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" gap={1}>
      <Grid item>
        <Avatar
          alt="User"
          src="https://i.ibb.co/x7dh0nK/1.jpg"
          sx={{ width: "30px", height: "30px" }}
        ></Avatar>
      </Grid>
      <Grid item>
        <Typography variant="caption" align="center" sx={{ color: "black" }}>
          Mukund Cake Shop
        </Typography>
      </Grid>
      <Grid item sx={{ ml: -1.5 }}>
        <ArrowDropDownIcon sx={{ color: "black" }}></ArrowDropDownIcon>
      </Grid>
    </Grid>
  );
};

export default UserAvatar;
