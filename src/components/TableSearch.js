import { Grid, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import moment from "moment/moment";

const TableSearch = (props) => {
  const { data, setCampaigns } = props;
  console.log(data);

  const [platform, setPlatform] = useState("");
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");
  const [date, setDate] = useState(30);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePlatformChange = (e) => {
    setPlatform(e.target.value);
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  useEffect(() => {
    let filteredData = data;
    if (search) {
      filteredData = filteredData.filter((row) => {
        console.log(row.name.toLowerCase());
        return row.name.toLowerCase().includes(search.toLowerCase());
      });
    }

    if (platform) {
      filteredData = filteredData.filter((row) => row.platform === platform);
    }

    if (status) {
      filteredData = filteredData.filter(
        (row) => !row.status || row.status === status
      );
    }

    if (date) {
      filteredData = filteredData.filter((row) =>
        moment(row.sdate, "DD/MM/YYYY")
          .add(date, "days")
          .isSameOrAfter(moment())
      );
    }

    console.log(
      moment("20/11/2022", "DD/MM/YYYY").add(30, "days").isSameOrAfter(moment())
    );

    setCampaigns(filteredData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, search, platform, status, date]);

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
          value={search}
          onChange={handleSearchChange}
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
              handleChange={handlePlatformChange}
            ></Filter>
          </Grid>

          <Grid item xs={4}>
            <Filter
              title="Status"
              values={{
                "All Status": "",
                Live: "Live now",
                Paused: "Paused",
                Exhausted: "Exhausted",
              }}
              state={status}
              handleChange={handleStatusChange}
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
              handleChange={handleDateChange}
            ></Filter>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TableSearch;
