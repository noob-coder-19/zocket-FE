import {
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const Filter = (props) => {
  return (
    <Stack
      direction="row"
      spacing={1}
      justifyContent="flex-end"
      alignItems="center"
    >
      {props.title ? <Typography>{props.title} : </Typography> : <></>}
      <FormControl sx={{ m: 1, minWidth: 180 }}>
        <Select
          value={props.state}
          onChange={(e) => props.setStateFunction(e.target.value)}
          displayEmpty
        >
          {Object.keys(props.values).map((item, index) => {
            return (
              <MenuItem key={index} value={props.values[item]}>
                {item}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Stack>
  );
};

export default Filter;
