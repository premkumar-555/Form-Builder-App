import React from "react";
import { Box, Typography } from "@mui/material/";
import { containerStyle } from "./RightOutput";
const LeftInput = () => {
  return (
    <Box sx={containerStyle}>
      <Typography variant="button" display="block" gutterBottom>
        Input
      </Typography>
    </Box>
  );
};

export default LeftInput;
