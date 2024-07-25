import React, { useState } from "react";
import "./style.css";

// const Star = ({ onClick, rating, index }) => {
//   return (
//     <div>
//       <div
//         className={rating <= index ? "instar" : "star"}
//         onClick={onClick}
//       ></div>
//     </div>
//   );
// };

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleOnClick = (currentIndex) => {
    setRating(currentIndex);
    console.log(currentIndex);
  };
  console.log(rating);
  return (
    <div className="star-container">
      {[...Array(5)].map((_, index) => {
        index += 1;
        return (
          <div
            key={index}
            className={index <= rating ? "star" : "instar"}
            onClick={() => handleOnClick(index)}
          ></div>
        );
      })}
    </div>
  );
};

export default StarRating;
