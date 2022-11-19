import { Box, Stack, Step, StepLabel, Stepper } from "@mui/material";
import axios from "axios";
import moment from "moment/moment";
import React, { useState } from "react";
import CustomButton from "./CustomButton";
import FirstStep from "./FirstStep";
import FourthStep from "./FourthStep";
import SecondStep from "./SecondStep";
import ThirdStep from "./ThirdStep";
import { useNavigate } from "react-router-dom";

const FormCampaign = () => {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(1);
  const [first, setFirst] = useState({
    platform: "google",
    title: "Get Leads as call",
  });

  const [second, setSecond] = useState({
    name: "",
    price: "",
    imgLink: "",
  });

  const [third, setThird] = useState({
    sdate: moment().format("DD/MM/YYYY"),
    edate: moment().format("DD/MM/YYYY"),
    budget: 750,
    location: "",
    radius: 0,
  });

  const handleSubmit = () => {
    const data = {
      name: second.name,
      sdate: third.sdate,
      edate: third.edate,
      budget: third.budget,
      location: third.location,
      platform: first.platform,
      imgLink: second.imgLink,
    };

    axios
      .post("http://localhost:4000/api/campaigns", data)
      .then((res) => {
        // console.log(res);
        return navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const showStep = (step) => {
    switch (step) {
      case 1:
        return <FirstStep setFirst={setFirst} first={first}></FirstStep>;
      case 2:
        return <SecondStep setSecond={setSecond} second={second}></SecondStep>;
      case 3:
        return <ThirdStep setThird={setThird} third={third}></ThirdStep>;
      case 4:
        return <FourthStep></FourthStep>;
      default:
        return <FirstStep></FirstStep>;
    }
  };

  return (
    <Box sx={{ mt: 2 }}>
      <Stepper
        sx={{ width: "100%", marginBottom: 2 }}
        activeStep={activeStep - 1}
        orientation="horizontal"
      >
        <Step>
          <StepLabel>What do you want to do</StepLabel>
        </Step>

        <Step>
          <StepLabel>Choose Product</StepLabel>
        </Step>

        <Step>
          <StepLabel>Campaign settings</StepLabel>
        </Step>

        <Step>
          <StepLabel>Ready to go</StepLabel>
        </Step>
      </Stepper>

      {showStep(activeStep)}

      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={2}
        sx={{ mt: 2 }}
      >
        <CustomButton
          text={activeStep === 4 ? "Submit" : "Continue"}
          callback={() => {
            if (activeStep === 4) {
              handleSubmit();
            } else {
              setActiveStep(activeStep + 1);
            }
          }}
        ></CustomButton>
      </Stack>
    </Box>
  );
};

export default FormCampaign;
