import React from "react";
import {
  DialogContent,
  DialogActions,
  Typography,
  Button,
  Box,
} from "@mui/material/";
import BootstrapDialogTitle from "../Reusable-assets/BootstrapDialogTitle";

const Logout = ({ setOpen, logOut }) => {
  return (
    <Box sx={{ width: "350px", height: "150px", padding: "0.5rem" }}>
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => setOpen(false)}
      >
        Do you really want to logout ?
      </BootstrapDialogTitle>
      <DialogActions>
        <Button
          onClick={() => {
            logOut();
            setOpen(false);
          }}
          variant="contained"
        >
          Yes
        </Button>
        <Button
          sx={{ background: "red" }}
          onClick={() => setOpen(false)}
          variant="contained"
        >
          Cancel
        </Button>
      </DialogActions>
    </Box>
  );
};

export default Logout;
