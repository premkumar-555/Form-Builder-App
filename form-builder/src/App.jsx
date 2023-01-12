import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { app, db } from "./Firebase/Config.js";
import NavBar from "./components/NavBar/NavBar";
import Pages from "./components/Routes/Pages";
import "./App.css";
import Box from "@mui/material/Box";
console.log(app, db);

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <NavBar />
      <Pages />
    </div>
  );
}

export default App;
