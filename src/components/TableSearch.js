import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import { Box } from "@mui/system";
import Filter from "./Filter";

const TableSearch = () => {
  const [platform, setPlatform] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(30);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        <TextField
          placeholder="Search for the campaign"
          variant="outlined"
          sx={{ width: "15rem", borderRadius: "30px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start" sx={{ borderRadius: "30px" }}>
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>

      <Grid item xs={8}>
        <Grid
          container
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          sx={{ width: "100%" }}
        >
          <Grid item xs={5}>
            <Filter
              title="Platform"
              values={{
                "All Platforms": "",
                Facebook: "facebook",
                Instagram: "instagram",
                Youtube: "youtube",
                Google: "google",
              }}
              state={platform}
              setStateFunction={setPlatform}
            ></Filter>
          </Grid>

          <Grid item xs={4}>
            <Filter
              title="Status"
              values={{
                "All Status": "",
                Live: "live",
                Paused: "paused",
                Exhausted: "exhausted",
              }}
              state={status}
              setStateFunction={setStatus}
            ></Filter>
          </Grid>

          <Grid item xs={3}>
            <Filter
              title=""
              values={{
                "Last 30 days": 30,
                "Last 3 months": 90,
                "Last 1 year": 365,
              }}
              state={date}
              setStateFunction={setDate}
            ></Filter>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableSearch;
