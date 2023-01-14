import React from "react";
import { Box, Typography } from "@mui/material/";
import RightOutput from "./components/RightOutput";
import LeftInput from "./components/LeftInput";
const containerStyle = {
  display: "flex",
  width: "95%",
  padding: "1rem",
  justifyContent: "space-between",
  alignItems: "center",
};
const CreateForm = () => {
  return (
    <>
      <Typography sx={{ margin: "0" }} variant="h6" gutterBottom>
        Create Form
      </Typography>
      <Box sx={containerStyle}>
        <LeftInput />
        <RightOutput />
      </Box>
    </>
  );
};

export default CreateForm;
