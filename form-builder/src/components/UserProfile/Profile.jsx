import React, { useState } from "react";
import {
  DialogContent,
  DialogActions,
  Avatar,
  Typography,
  Button,
  Box,
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
      <DialogContent dividers>
        <Avatar
          alt={userName}
          src={userProfile}
          sx={{ width: 125, height: 125, border: "3px solid skyblue" }}
        />
        <Typography gutterBottom>
          <strong>Name : </strong> <span>{userName}</span>
        </Typography>
        <Typography gutterBottom>
          <strong>EmailId : </strong> <span>{userEmail}</span>
        </Typography>
      </DialogContent>
    </Box>
  );
};

export default Profile;
