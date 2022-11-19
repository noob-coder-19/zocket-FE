import { Box, Grid, Slider, Stack, TextField, Typography } from "@mui/material";
import React from "react";
import FormTitle from "./FormTitle";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import moment from "moment/moment";

const ThirdStep = (props) => {
  const { setThird, third } = props;

  return (
    <Box
      sx={{
        p: 2,
        border: "2px solid rgba(218, 230, 255, 1)",
        borderRadius: "10px",
        backgroundColor: "white",
      }}
    >
      <FormTitle title="Campaign settings" stepNum={3}></FormTitle>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        spacing={2}
        sx={{ px: 2 }}
      >
        <Grid item>
          <Typography
            variant="h6"
            sx={{ fontSize: "0.9rem", fontWeight: "600" }}
          >
            Budget and dates info
          </Typography>

          <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
            sx={{ my: 2 }}
          >
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                spacing={3}
              >
                <DesktopDatePicker
                  label="Start date"
                  inputFormat="DD/MM/YYYY"
                  value={moment(third.sdate, "DD/MM/YYYY").toDate()}
                  renderInput={(params) => <TextField {...params} />}
                  onChange={(newValue) => {
                    setThird({
                      ...third,
                      sdate: moment(newValue).format("DD/MM/YYYY"),
                    });
                  }}
                ></DesktopDatePicker>

                <DesktopDatePicker
                  label="End date"
                  inputFormat="DD/MM/YYYY"
                  value={moment(third.edate, "DD/MM/YYYY").toDate()}
                  renderInput={(params) => <TextField {...params} />}
                  onChange={(newValue) => {
                    setThird({
                      ...third,
                      edate: moment(newValue).format("DD/MM/YYYY"),
                    });
                  }}
                ></DesktopDatePicker>
              </Stack>
            </LocalizationProvider>

            <Box sx={{ width: "100%" }}>
              <Typography variant="body2" sx={{ fontSize: "0.7rem" }}>
                Enter Campaign Budget
              </Typography>
              <Slider
                valueLabelDisplay="auto"
                min={100}
                max={10000}
                marks={[
                  { value: 100, label: " Rs. 100" },
                  { value: 10000, label: "Rs. 10000" },
                ]}
                sx={{ width: "100%", ml: 3 }}
                value={third.budget}
                onChange={(e, value) => {
                  setThird({ ...third, budget: value });
                }}
              />
            </Box>
          </Stack>
        </Grid>

        <Grid item sx={{ width: "100%" }}>
          <Typography
            variant="h6"
            sx={{ fontSize: "0.9rem", fontWeight: "600" }}
          >
            Location info
          </Typography>
          <TextField
            variant="outlined"
            value={third.location}
            onChange={(e) => {
              setThird({ ...third, location: e.target.value });
            }}
            fullWidth
            sx={{ width: "90%", mt: 1 }}
            placeholder="Select a place name, address or coordinates"
          ></TextField>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ThirdStep;
