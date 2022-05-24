import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Periyar from "./screens/Periyar";
import { Routes, Route, Link } from "react-router-dom";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Journalism from "./screens/Journalism/Journalism";
import ITEC from "./screens/ITEC";
import TamilSite from "./screens/TamilSite";
import Discord from "./screens/Discord";
import Portfolio from "./screens/portfolio/Portfolio";
import NGO from "./screens/NGO/NGO";
import EBussiness from "./screens/E-Bussiness/EBussiness";
import SearchEngine from "./screens/SearchEngine/SearchEngine";
import Entertainment from "./screens/Entertainment/EnterTainment";

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
        <Link to="/ITEC">
          <ToggleButton value="ios">ITEC</ToggleButton>
        </Link>
        <Link to="/TamilUnicode">
          <ToggleButton value="ios">TamilSite</ToggleButton>
        </Link>
        <Link to="/Discord">
          <ToggleButton value="ios">Discord</ToggleButton>
        </Link>
        <Link to="/portfolio">
          <ToggleButton value="ios">Portfolio</ToggleButton>
        </Link>
        <Link to="/NGO">
          <ToggleButton value="ios">NGO</ToggleButton>
        </Link>
        <Link to="/E-Bussiness">
          <ToggleButton value="ios">E-Bussiness</ToggleButton>
        </Link>
        <Link to="/SearchEngine">
          <ToggleButton value="ios">SearchEngine</ToggleButton>
        </Link>
        <Link to="/Entertainment">
          <ToggleButton value="ios">Entertainment</ToggleButton>
        </Link>
      </ToggleButtonGroup>
      <Routes>
        <Route path="/" element={<Periyar />} />
        <Route path="/jounalism" element={<Journalism />} />
        <Route path="/ITEC" element={<ITEC />} />
        <Route path="/Discord" element={<Discord />} />

        <Route path="/TamilUnicode" element={<TamilSite />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/NGO" element={<NGO />} />
        <Route path="/E-Bussiness" element={<EBussiness />} />
        <Route path="/SearchEngine" element={<SearchEngine />} />
        <Route path="/Entertainment" element={<Entertainment />} />

      </Routes>
    </div>
  );
}

export default App;
