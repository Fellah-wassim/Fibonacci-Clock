import React from "react";
import "./BackNextButtons.css";
import { LeftArrow } from "../assets/icons/LeftArrow";
import { RightArrow } from "../assets/icons/RightArrow";

interface BackNextButtonsProps {
  adjustTime: (plusOrMinusFive: number) => void;
}

const BackNextButtons: React.FC<BackNextButtonsProps> = ({ adjustTime }) => {
  return (
    <div className="buttons-container">
      <button onClick={() => adjustTime(-5)}>
        <LeftArrow width="36" height="36" color="black" />
        <div>Back 5</div>
      </button>
      <button onClick={() => adjustTime(5)}>
        <div>Next 5</div>
        <RightArrow width="36" height="36" color="black" />
      </button>
    </div>
  );
};

export default BackNextButtons;
