import React from "react";
import { Box, Typography } from "@mui/material/";
export const containerStyle = {
  width: "49%",
  height: "100%",
  border: "1px solid blue",
  borderRadius: "4px",
  padding: "1rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: '5px',
  alignItems: "center",
};
const RightOutput = () => {
  return (
    <Box sx={containerStyle}>
      <Typography variant="button" display="block" gutterBottom>
        Output
      </Typography>
    </Box>
  );
};

export default RightOutput;
