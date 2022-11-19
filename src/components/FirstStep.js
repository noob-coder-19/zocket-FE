import { Box, Grid } from "@mui/material";
import React from "react";
import FirstStepEntry from "./FirstStepEntry";
import FormTitle from "./FormTitle";

const FirstStep = (props) => {
  const { first, setFirst } = props;
  //   console.log(first);

  return (
    <Box
      sx={{
        p: 2,
        border: "2px solid rgba(243, 243, 243, 1)",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
    >
      <FormTitle title="What do you want to do?" stepNum={1}></FormTitle>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        columns={6}
      >
        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({ platform: "google", title: "Get Leads as call" });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/zJmDt1N/Frame-1.png"
            simg="https://i.ibb.co/Y0yjtgN/Frame-2.png"
            title="Get Leads as call"
            desc="Reach broad audience and get leads through calls"
            platform="google"
            selected={first.title === "Get Leads as call"}
            imgSize="22px"
          ></FirstStepEntry>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({
              platform: "facebook",
              title: "Get Leads as Facebook messages",
            });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/QFfN5v7/Frame-3.png"
            simg="https://i.ibb.co/Gpmyn6V/Frame-4.png"
            title="Get Leads as Facebook messages"
            desc="Reach broad audience and get leads through calls"
            platform="facebook"
            selected={first.title === "Get Leads as Facebook messages"}
          ></FirstStepEntry>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({
              platform: "facebook",
              title: "Increase Page followers",
            });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/2sBpXtb/Frame-5.png"
            simg="https://i.ibb.co/xHysgtb/Frame.png"
            title="Increase Page followers"
            desc="Reach broad audience and get leads through calls"
            platform="facebook"
            selected={first.title === "Increase Page followers"}
          ></FirstStepEntry>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({
              platform: "facebook",
              title: "Get Customer Leads",
            });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/4VmHMWB/Frame-6.png"
            simg="https://i.ibb.co/1Z1R4Pg/Frame-7.png"
            title="Get Customer Leads"
            desc="Reach broad audience and get leads through calls"
            platform="facebook"
            selected={first.title === "Get Customer Leads"}
          ></FirstStepEntry>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({
              platform: "youtube",
              title: "Get More youtube views",
            });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/4M6Ghgc/Frame-10.png"
            simg="https://i.ibb.co/dfg2yPS/Frame-11.png"
            title="Get More youtube views"
            desc="Reach broad audience and get leads through calls"
            platform="youtube"
            selected={first.title === "Get More youtube views"}
          ></FirstStepEntry>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({
              platform: "instagram",
              title: "Get More website Traffic",
            });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/nBDJmLC/Frame-14.png"
            simg="https://i.ibb.co/RjYgTGn/Frame-15.png"
            title="Get More website Traffic"
            desc="Reach broad audience and get leads through calls"
            platform="instagram"
            selected={first.title === "Get More website Traffic"}
          ></FirstStepEntry>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({
              platform: "google",
              title: "Increase Livestore Traffic",
            });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/YdqQxrx/Frame-8.png"
            simg="https://i.ibb.co/KGHR2Tc/Frame-9.png"
            title="Increase Livestore Traffic"
            desc="Reach broad audience and get leads through calls"
            platform="google"
            selected={first.title === "Increase Livestore Traffic"}
          ></FirstStepEntry>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({
              platform: "youtube",
              title: "Increase your app instals",
            });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/5cRF0gJ/Frame-12.png"
            simg="https://i.ibb.co/vh5HJLX/Frame-13.png"
            title="Increase your app instals"
            desc="Reach broad audience and get leads through calls"
            platform="youtube"
            selected={first.title === "Increase your app instals"}
          ></FirstStepEntry>
        </Grid>

        <Grid
          item
          xs={2}
          sx={{ width: "100%" }}
          onClick={() => {
            setFirst({
              platform: "google",
              title: "Increase the catalogue sales",
            });
          }}
        >
          <FirstStepEntry
            img="https://i.ibb.co/8mKDn0V/Frame-16.png"
            simg="https://i.ibb.co/F6Rwn2N/Frame-17.png"
            title="Increase the catalogue sales"
            desc="Reach broad audience and get leads through calls"
            platform="google"
            selected={first.title === "Increase the catalogue sales"}
          ></FirstStepEntry>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FirstStep;
