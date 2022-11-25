import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import TableData from "./TableData";
import TableSearch from "./TableSearch";

const Table = () => {
  const [data, setData] = useState([]);
  const [campaigns, setCampaigns] = useState(data);

  const getCampaigns = async () => {
    axios
      .get("https://api-zocket-assignment.herokuapp.com/api/campaigns")
      .then((res) => {
        setData(res.data);
      });
  };

  useEffect(() => {
    getCampaigns();
  }, []);

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
      <TableSearch data={data} setCampaigns={setCampaigns}></TableSearch>
      <TableData campaigns={campaigns} getCampaigns={getCampaigns}></TableData>
    </Box>
  );
};

export default Table;
