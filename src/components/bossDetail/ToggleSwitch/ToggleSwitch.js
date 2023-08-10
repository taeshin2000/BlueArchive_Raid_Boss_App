import React from "react";
import { useState, useRef, useEffect } from "react";

import Slider from "./Slider";
import Choice from "./Choice";

const ToggleSwitch = ({
  selectedChoice,
  setSelectedChoice,
  isDifficulty,
  firstChoice,
  secondChoice,
}) => {
  const switchParentRef = useRef();
  const [width, setWidth] = useState(0);
  useEffect(() => {
    console.log(width);
    if (!switchParentRef?.current?.clientWidth) {
      return;
    }
    setWidth(switchParentRef?.current?.clientWidth);
  }, [width]);

  return (
    <div
      ref={switchParentRef}
      style={{
        display: "flex",
        cursor: "pointer",
        position: "relative",
        background: "#fff",
        border: "#fff solid 1",
        borderRadius: 10,
        boxShadow:
          "0px 4px 6px 0px rgba(0, 0, 0, 0.25) inset, 0px -4px 6px 0px rgba(0, 0, 0, 0.25) inset",
      }}
    >
      <Choice
        choiceNumber={1}
        displayText={firstChoice}
        setSelectedChoice={setSelectedChoice}
      />
      <Choice
        choiceNumber={2}
        displayText={secondChoice}
        setSelectedChoice={setSelectedChoice}
      />
      <Slider
        displayText={selectedChoice === 1 ? firstChoice : secondChoice}
        parentWidth={width}
        selectedChoice={selectedChoice}
        isDifficulty={isDifficulty}
      />
    </div>
  );
};
export default ToggleSwitch;
