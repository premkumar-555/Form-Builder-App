import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { firebase } from "../../Firebase/Config.js";
import { logIn, logOut } from "../Redux/User/action.js";
import { useDispatch } from "react-redux";

const flexBox = {
  display: "flex",
  width: "85%",
  justifyContent: "space-between",
};
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard() {
  const auth = getAuth(firebase);
  const dispatch = useDispatch();

  const signIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(logIn(result?.user?.providerData[0]));
      })
      .catch((error) => {
        console.log("error ", error.message);
      });
  };

  return (
    <Card
      sx={{
        width: "25%",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding: '1rem'
      }}
    >
      <CardContent>
        <Typography variant="h5" component="div">
          Login
        </Typography>
        <br />
        <Typography variant="body2">
          Login securely with Google signin feature .
        </Typography>
      </CardContent>
      <CardActions>
        <Box sx={flexBox}>
          <Avatar
            alt="Remy Sharp"
            src="https://img.icons8.com/fluency/48/null/google-logo.png"
            sx={{ width: 60, height: 60 }}
          />
          <Button
            onClick={() => signIn()}
            size="large"
            variant="contained"
            color="primary"
          >
            Login with Google
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
