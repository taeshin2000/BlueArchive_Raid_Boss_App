import React from "react";
import Choice from "./Choice";

const Slider = ({ displayText, selectedChoice, parentWidth, isDifficulty }) => {
  return (
    <div
      style={{
        background:
          isDifficulty && selectedChoice == 1
            ? "linear-gradient(270deg, #7F94FF 0%, #4C69FF 100%)"
            : "linear-gradient(270deg, #FF8B38 0%, #FF4C4C 100%)",
        borderRadius: 10,
        position: "absolute",
        transition: "all .2s",
        transform:
          selectedChoice == 1
            ? "translateX(0%)"
            : `translateX(${parentWidth}px) translateX(-100%)`,
        width: "fit-content",
        padding: "10px 16px",
        color: "#fff",
        userSelect: "none",
        boxShadow:
          "4px 0px 6px 0px rgba(0, 0, 0, 0.25), -4px 0px 6px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {displayText}
    </div>
  );
};
export default Slider;
