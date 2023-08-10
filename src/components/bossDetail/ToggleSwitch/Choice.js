import React from "react";

const Choice = ({ choiceNumber, displayText, changeChoiceFunction }) => {
  return (
    <div
      onClick={() => changeChoiceFunction(choiceNumber)}
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
