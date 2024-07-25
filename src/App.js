import React, { useRef } from "react";
import "./App.css";
import Accordian from "./components/accordian/Accordian";
import StarRating from "./components/star-rating/StarRating";
import LightDarkMode from "./components/light-dark-mode/LightDarkMode";
import ColorGenerator from "./components/colorgenarator/ColorGenerator";
import TicTacTo from "./components/tic-tac-to/TicTacTo";
import ImgSlider from "./components/imgslider/ImgSlider";

const App = () => {
  const bottomRef = useRef(null);

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleScrollBottom = () => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <div className="bottom">
        <button onClick={handleScrollBottom}>scroll to bottom</button>
      </div>
      <Accordian />
      <StarRating />
      <LightDarkMode />
      <ColorGenerator />
      <TicTacTo />
      <ImgSlider />
      <div className="top">
        <button onClick={handleScrollTop}>scroll to top</button>
      </div>
      <div ref={bottomRef}></div>
    </div>
  );
};

export default App;
