import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomButton from "./CustomButton";
import CustomHeader from "./CustomHeader";

const Headers = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
      >
        <Grid item>
          <CustomHeader
            heading="Your Campaign"
            detail="Check the list of campaings you created"
          ></CustomHeader>
        </Grid>
        <Grid item>
          <CustomButton
            text={"Create new Campaign"}
            callback={(e) => {
              return navigate("/campaign");
            }}
          ></CustomButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Headers;
