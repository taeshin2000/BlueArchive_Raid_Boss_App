import React from "react";

const ArmorDisplay = ({ armorType }) => {
  return (
    <div
      style={{
        padding: 10,
        background:
          armorType === "Heavy Armor"
            ? "#D89F4B"
            : armorType === "Special Armor"
            ? "#506AF2"
            : "#DF5757",
        borderRadius: "8px",
        fontSize: 12,
      }}
    >
      {armorType}
    </div>
  );
};
export default ArmorDisplay;
