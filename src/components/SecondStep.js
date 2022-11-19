import { Box, Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import FirstStepEntry from "./FirstStepEntry";
import FormTitle from "./FormTitle";

const SecondStep = (props) => {
  const [products, setProducts] = useState([]);
  const { second, setSecond } = props;

  useEffect(() => {
    axios
      .get("https://api-zocket-assignment.herokuapp.com/api/products")
      .then((res) => {
        setProducts(res.data);
        // setSecond(products[0]);
      });
  }, []);

  return (
    <Box
      sx={{
        p: 2,
        border: "2px solid rgba(218, 230, 255, 1)",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
    >
      <FormTitle title="Choose your product" stepNum={2}></FormTitle>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        columns={6}
      >
        {products.map((product) => (
          <Grid
            key={product._id}
            item
            xs={2}
            sx={{ width: "100%" }}
            onClick={() => {
              setSecond(product);
            }}
          >
            <FirstStepEntry
              img={product.imgLink}
              simg={product.imgLink}
              title={product.name}
              desc={product.price}
              selected={second.name === product.name}
              imgSize="42px"
            ></FirstStepEntry>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SecondStep;
