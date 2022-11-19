import { Divider, Drawer } from "@mui/material";
import React from "react";
import Logo from "./Logo";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  return (
    <>
      <Drawer
        anchor="left"
        variant="permanent"
        sx={{
          width: "102px",
          backgroundColor: "#001738",
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: "102px",
            boxSizing: "border-box",
            backgroundColor: "#001738",
          },
        }}
      >
        <Logo></Logo>
        <Divider
          sx={{
            borderColor: "#bdbdbd",
          }}
        ></Divider>
        <NavbarLinks></NavbarLinks>
      </Drawer>
    </>
  );
};

export default Navbar;
