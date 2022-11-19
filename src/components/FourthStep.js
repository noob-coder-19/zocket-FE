import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import FinalStepEntry from "./FinalStepEntry";
import FormTitle from "./FormTitle";

const FourthStep = () => {
  const [selected, setSelected] = useState(0);
  const data = [
    "https://i.ibb.co/jMX5mqp/stage44.png",
    "https://i.ibb.co/ZSMmVFJ/stage43.png",
    "https://i.ibb.co/QHyp4pM/stage41.png",
    "https://i.ibb.co/zVTfkNQ/stage42.png",
  ];

  console.log(selected);

  return (
    <Box
      sx={{
        p: 2,
        border: "2px solid rgba(218, 230, 255, 1)",
        borderRadius: "10px",
      }}
    >
      <FormTitle title="Ready to go" stepNum={4}></FormTitle>
      Fourth Step
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={3}
      >
        {data.map((item, index) => (
          <Box
            key={index}
            onClick={() => {
              setSelected(index);
            }}
          >
            <FinalStepEntry
              key={index}
              selected={index === selected}
              imgLink={item}
            ></FinalStepEntry>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FourthStep;
