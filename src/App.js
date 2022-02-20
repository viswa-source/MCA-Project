import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Periyar from "./screens/Periyar";
import { Routes, Route, Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Journalism from "./screens/Journalism";

function App() {
  const [alignment, setAlignment] = React.useState("web");
  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="App">
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <Link to="/">
          <ToggleButton value="web">Periyar</ToggleButton>
        </Link>

        <Link to="/jounalism">
          <ToggleButton value="android">Journalism</ToggleButton>
        </Link>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>
      <Routes>
        <Route path="/" element={<Periyar />} />
        <Route path="/jounalism" element={<Journalism />} />
      </Routes>
    </div>
  );
}

export default App;
