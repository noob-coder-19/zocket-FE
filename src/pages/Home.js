import React from "react";
import Headers from "../components/Headers";
import TopBar from "../components/TopBar";
import Padding from "../components/Padding";
import { Box } from "@mui/material";
import Table from "../components/Table";

const Home = () => {
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
        <Headers></Headers>
        <Table></Table>
      </Box>
    </div>
  );
};

export default Home;
