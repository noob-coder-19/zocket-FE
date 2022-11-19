import { Switch } from "@mui/material";
import React, { useState } from "react";

const OnOffSlider = (props) => {
  const { disabled, isOn } = props;
  const [checked, setChecked] = useState(isOn);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <Switch checked={checked} disabled={disabled} onChange={onChange}></Switch>
  );
};

export default OnOffSlider;
