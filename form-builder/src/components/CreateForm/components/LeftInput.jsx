import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Chip,
  Paper,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material/";
import { containerStyle } from "./RightOutput";

const boxStyle = {
  display: "flex",
  alignItems: "center",
  width: "75%",
  justifyContent: "space-between",
};

const LeftInput = () => {
  const [formValues, setformValues] = useState({
    formName: "",
    fieldName: "",
    fieldElement: "",
    fieldType: "",
    fieldOptions: [],
  });
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const handleChanges = (e) => {
    const { id, value } = e.target;
    setformValues((pre) => ({ ...pre, [id]: value }));
    console.log(formValues);
  };

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };
  return (
    <Box sx={containerStyle}>
      <Typography variant="button" display="block" gutterBottom>
        Input
      </Typography>
      <Box sx={boxStyle}>
        <label htmlFor="formName">
          <strong>Form Name </strong>&nbsp;&nbsp;
        </label>
        <TextField
          onChange={(e) => handleChanges(e)}
          id="formName"
          defaultValue="form name"
          size="small"
        />
      </Box>
      <Box sx={boxStyle}>
        <label htmlFor="fields">
          <strong>Fields</strong>&nbsp;&nbsp;
        </label>
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            p: 0.5,
            m: 0,
          }}
          component="ul"
        >
          <Chip
            label="field 1"
            // variant="outlined"
            onClick={handleClick}
            onDelete={handleDelete}
          />
        </Paper>
      </Box>
      <Box sx={boxStyle}>
        <label htmlFor="fieldName">
          <strong>Field Name </strong>&nbsp;&nbsp;
        </label>
        <TextField
          onChange={(e) => handleChanges(e)}
          id="fieldName"
          defaultValue="field Name"
          size="small"
        />
      </Box>
      <Box sx={boxStyle}>
        <label htmlFor="fieldElement">
          <strong>Field Element </strong>&nbsp;&nbsp;
        </label>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value="Input"
          size="small"
          // label="Age"
          onChange={handleDelete}
        >
          <MenuItem value={"Input"}>Input</MenuItem>
          <MenuItem value={"Text Area"}>Text Area</MenuItem>
          <MenuItem value={"Select"}>Select</MenuItem>
        </Select>
      </Box>
    </Box>
  );
};

export default LeftInput;
