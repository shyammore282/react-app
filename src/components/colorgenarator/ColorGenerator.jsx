import React, { useEffect, useState } from "react";
import "./colorStyle.css";

const ColorGenerator = () => {
  const [typeOfcolor, setTypeOfColor] = useState("Hex");
  const [color, setColor] = useState("#000000");

  const randomUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleGenerateHexColor = () => {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let colorCode = "#";
    for (let i = 0; i < 6; i++) {
      colorCode += hex[randomUtility(hex.length)];
    }
    setColor(colorCode);
  };

  const handleGenerateRgbColor = () => {
    const r = randomUtility(256);
    const g = randomUtility(256);
    const b = randomUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  };

  useEffect(() => {
    if (typeOfcolor === "rgb") {
      handleGenerateRgbColor();
    } else {
      handleGenerateHexColor();
    }
  }, [typeOfcolor]);
  console.log(color);
  return (
    <div
      style={{
        marginTop: "20px",
        width: "100%",
        height: "30vh",
        backgroundColor: color,
      }}
    >
      <div className="button-box">
        <button onClick={() => setTypeOfColor("Hex")}>Hex color</button>
        <button onClick={() => setTypeOfColor("rgb")}>Rgb color</button>
        <button
          onClick={
            typeOfcolor === "Hex"
              ? handleGenerateHexColor
              : handleGenerateRgbColor
          }
        >
          color generator
        </button>
      </div>

      <div className="body-content">
        <span>{typeOfcolor}</span>
        <span>{color}</span>
      </div>
    </div>
  );
};

export default ColorGenerator;
