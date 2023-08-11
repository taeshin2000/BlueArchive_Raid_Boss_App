import React from "react";
import "../../../index.css";

const SkillSelector = ({
  imageSrc,
  skillNumber,
  selectedSkill,
  setSelectedSkill,
}) => {
  return (
    <div
      onClick={() => {
        setSelectedSkill(skillNumber);
      }}
      style={{
        cursor: "pointer",
        transition: "all .25s",
        width: selectedSkill === skillNumber ? 75 : 50,
        display: "flex",
      }}
    >
      <img
        className="hover-image"
        src={imageSrc}
        style={{ width: "100%", alignSelf: "center" }}
      />
    </div>
  );
};
export default SkillSelector;
