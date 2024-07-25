import React, { useState } from "react";
import "./lightStyle.css";
import useLocalStorage from "./customhook/useLocalStorage";

const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  const [mode, setMode] = useState("Dark Mode");

  const handleLightDarkMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
    setMode(mode === "Light Mode" ? "Dark Mode" : "Light Mode");
  };

  console.log(mode);

  return (
    <div className="light-dark-container" enable-mode={theme}>
      <h1>Hello Woeld !</h1>
      <span>
        <button onClick={handleLightDarkMode}>{mode}</button>
      </span>
    </div>
  );
};

export default LightDarkMode;
