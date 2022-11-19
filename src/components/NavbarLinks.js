import { Grid } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

// https://i.ibb.co/vVHdpV8/Frame-1.png
// https://i.ibb.co/7WQp3bF/Frame-2.png
// https://i.ibb.co/Mnn8c8k/Frame-3.png
// https://i.ibb.co/vqyf1qd/Frame-4.png

// https://i.ibb.co/C2czLFm/Frame-6.png
// https://i.ibb.co/b5BtrXG/Frame-7.png
// https://i.ibb.co/m85P3Sm/Frame-8.png
// https://i.ibb.co/27HYSwq/Frame-9.png

const NavbarLinks = () => {
  const [curr, setCurr] = useState(1);

  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        sx={{ my: 2 }}
      >
        <Link
          to="/"
          onClick={() => setCurr(1)}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <NavLink
            selectImg="https://i.ibb.co/C2czLFm/Frame-6.png"
            img="https://i.ibb.co/vVHdpV8/Frame-1.png"
            text="Home"
            key="1"
            selected={curr === 1}
          ></NavLink>
        </Link>

        <Link
          to="/campaign"
          onClick={() => setCurr(2)}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <NavLink
            selectImg="https://i.ibb.co/b5BtrXG/Frame-7.png"
            img="https://i.ibb.co/7WQp3bF/Frame-2.png"
            text="Campaign"
            key="2"
            selected={curr === 2}
          ></NavLink>
        </Link>

        <Link
          to="products"
          onClick={() => setCurr(3)}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <NavLink
            selectImg="https://i.ibb.co/m85P3Sm/Frame-8.png"
            img="https://i.ibb.co/Mnn8c8k/Frame-3.png"
            text="Products"
            key="3"
            selected={curr === 3}
          ></NavLink>
        </Link>

        <Link
          to="customers"
          onClick={() => setCurr(4)}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <NavLink
            selectImg="https://i.ibb.co/27HYSwq/Frame-9.png"
            img="https://i.ibb.co/vqyf1qd/Frame-4.png"
            text="Customers"
            key="4"
            selected={curr === 4}
          ></NavLink>
        </Link>
      </Grid>
    </>
  );
};

export default NavbarLinks;
