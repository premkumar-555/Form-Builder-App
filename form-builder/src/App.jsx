import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { app, db } from "./Firebase/Config.js";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./components/Routes/Pages";
import "./App.css";
import { Box } from "@mui/material/";
const containerStyle = {
  width: "100%",
  padding: "1rem",
  position: "absolute",
  top: "75px",
  left: "0px",
  right: "0px",
  border: "1px solid black",
};
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Box sx={containerStyle}>
        <Pages />
      </Box>
    </div>
  );
}

export default App;
