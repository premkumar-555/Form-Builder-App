import React from "react";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import BasicCard from "./Card";

const Login = () => {
  return <BasicCard />;
};

export default Login;
