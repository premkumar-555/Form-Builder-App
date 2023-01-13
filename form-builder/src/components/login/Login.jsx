import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { firebase } from "../../Firebase/Config.js";
import { useNavigate } from "react-router-dom";
import BasicCard from "./Card";

const Login = () => {
  const auth = getAuth(firebase);
  const navigate = useNavigate();
  const signIn = () => {
    var provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // console.log("result ", result);
      })
      .catch((error) => {
        console.log("error ", error.message);
      });
  };
  return <BasicCard />;
};

export default Login;
