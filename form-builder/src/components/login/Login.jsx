import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { firebase } from "../../Firebase/Config.js";
import BasicCard from "./Card";

const Login = () => {
  const auth = getAuth(firebase);
  return <BasicCard />;
};

export default Login;
