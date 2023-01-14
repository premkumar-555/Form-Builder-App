import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./components/Routes/Pages";
import "./App.css";
import { Box } from "@mui/material/";
import { firebase, db } from "./Firebase/Config.js";
import { collection, doc, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
const containerStyle = {
  width: "100%",
  height: "450px",
  padding: "1.5rem",
  position: "absolute",
  top: "75px",
  left: "0px",
  right: "0px",
  border: "1px solid black",
};
function App() {
  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.user);

  useEffect(() => {
    isLoggedIn ? navigate("/") : navigate("login");
  }, [isLoggedIn]);
  return (
    <div className="App">
      {isLoggedIn && <NavBar />}
      <Box sx={containerStyle}>
        <Pages />
      </Box>
    </div>
  );
}

export default App;
