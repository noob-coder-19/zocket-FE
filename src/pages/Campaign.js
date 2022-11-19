import { Box } from "@mui/material";
import React from "react";
import CustomHeader from "../components/CustomHeader";
import FormCampaign from "../components/FormCampaign";
import Padding from "../components/Padding";
import TopBar from "../components/TopBar";

const Campaign = () => {
  return (
    <div>
      <TopBar></TopBar>
      <Box
        sx={{
          p: 4,
          backgroundColor: "rgb(245, 249, 255)",
          width: "calc(100vw - 102px)",
          boxSizing: "border-box",
        }}
      >
        <Padding></Padding>
        <CustomHeader
          heading="Your Ad Campaign"
          detail="Launch your ad in 4 easy steps"
        ></CustomHeader>
        <FormCampaign></FormCampaign>
      </Box>
    </div>
  );
};

export default Campaign;
