import React, { useEffect, useState } from "react";
import "./style.css";
import { Images } from "../../data/Data";

const ImgSlider = () => {
  const [imageSlider, setImageSlider] = useState(0);

  const handlePrevies = () => {
    setImageSlider(imageSlider === 0 ? Images.length - 1 : imageSlider - 1);
  };

  const handleNext = () => {
    setImageSlider(imageSlider === Images.length - 1 ? 0 : imageSlider + 1);
  };

  const handleCircleIndicator = (currentIndex) => {
    setImageSlider(currentIndex);
  };
  useEffect(() => {}, [imageSlider]);
  return (
    <div>
      <div className="slider-container">
        <span className="button-box">
          <button className="slider-button left" onClick={handlePrevies}>
            Previes
          </button>
        </span>
        {Images && Images.length
          ? Images.map((items) => {
              return (
                <div className="img-box">
                  <img
                    key={items.id}
                    className={imageSlider === items.id ? "active" : "inactive"}
                    src={items.url}
                    alt="img"
                  />
                </div>
              );
            })
          : null}
        <span className="button-box">
          <button className="slider-button right" onClick={handleNext}>
            Next
          </button>
        </span>
        {Images && Images.length
          ? Images.map((_, index) => {
              return (
                <button
                  key={index}
                  className={
                    imageSlider === index
                      ? "circle-indicator"
                      : "circle-indicator-update"
                  }
                  onClick={() => handleCircleIndicator(index)}
                ></button>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default ImgSlider;
