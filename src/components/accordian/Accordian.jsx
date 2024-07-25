import React, { useState } from "react";
import "./style.css";
import { Question } from "../../data/Data";

const Accordian = () => {
  const [singleSelect, setSingleSelect] = useState(null);

  const handleOnClick = (getId) => {
    setSingleSelect(getId === singleSelect ? null : getId);
  };
  return (
    <div className="accordian-container">
      <h2>Accordian Question Answer</h2>
      <div>
        {Question.map((items) => {
          return (
            <div key={items.id}>
              <div className="title" onClick={() => handleOnClick(items.id)}>
                <div className="heading"> {items.question}</div>
                <span>+</span>
              </div>
              <div
                className={items.id === singleSelect ? "active" : "inactive"}
              >
                {items.answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordian;
