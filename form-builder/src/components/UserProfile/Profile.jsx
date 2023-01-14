import React, { useState } from "react";
import {
  DialogContent,
  DialogActions,
  Avatar,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material/";
import { useSelector } from "react-redux";
import BootstrapDialogTitle from "../Reusable-assets/BootstrapDialogTitle";
const Profile = ({ setOpen }) => {
  const { userEmail, userProfile, userName } = useSelector(
    (state) => state.user
  );

  return (
    <Box sx={{ width: "350px", height: "auto", padding: "0.5rem" }}>
      <BootstrapDialogTitle
        id="customized-dialog-title"
        onClose={() => setOpen(false)}
      >
        User Profile
      </BootstrapDialogTitle>
      <DialogContent
        sx={{ background: "skyblue", borderRadius: "0.5rem" }}
        dividers
      >
        <Avatar
          alt={userName}
          src={userProfile}
          sx={{
            width: 125,
            height: 125,
            border: "3px solid skyblue",
            mb: "10px",
          }}
        />
        <Typography gutterBottom>
          <strong>Name : </strong>{" "}
          <Chip
            label={userName}
            style={{ fontWeight: "500", letterSpacing: "1px" }}
            color="success"
          />
        </Typography>
        <Typography gutterBottom>
          <strong>EmailId : </strong>{" "}
          <Chip
            label={userEmail}
            style={{ fontWeight: "500", letterSpacing: "1px" }}
            color="success"
          />
        </Typography>
      </DialogContent>
    </Box>
  );
};

export default Profile;
