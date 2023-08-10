import React from "react";

const AttackDisplay = ({ attackType }) => {
  return (
    <div style={{ display: "flex", gap: "4px" }}>
      <div
        style={{
          padding: 10,
          background:
            attackType === "Normal"
              ? "#566197"
              : attackType === "Penetration"
              ? "#D89F4B"
              : attackType === "Mystic"
              ? "#506AF2"
              : "#DF5757",
          borderRadius: "8px",
          fontSize: 12,
        }}
      >
        {attackType}
      </div>
    </div>
  );
};
export default AttackDisplay;
