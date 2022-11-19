import { Box } from "@mui/material";
import React from "react";
import TableData from "./TableData";
import TableSearch from "./TableSearch";

const Table = () => {
  return (
    <Box
      sx={{
        width: `calc(100% - ${4})`,
        p: 2,
        mt: 2,
        backgroundColor: "white",
        border: "1px solid rgba(218, 230, 255, 1)",
        borderRadius: "10px",
      }}
    >
      <TableSearch></TableSearch>
      <TableData></TableData>
    </Box>
  );
};

export default Table;
