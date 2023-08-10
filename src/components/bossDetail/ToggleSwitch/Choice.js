import React from "react";

const Choice = ({ choiceNumber, displayText, setSelectedChoice }) => {
  return (
    <div
      onClick={() => {
        setSelectedChoice(choiceNumber);
      }}
      style={{
        fontWeight: 400,
        padding: "10px 16px",
        color: "#aaa",
        userSelect: "none",
      }}
    >
      {displayText}
    </div>
  );
};
export default Choice;
