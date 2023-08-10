import React from "react";
import ArmorDisplay from "./ArmorDisplay";
import AttackDisplay from "./AttackDisplay";

const BossName = ({ name, attackType, armorType }) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
      <p style={{ fontSize: 48 }}>{name}</p>
      <div style={{ display: "flex", gap: "4px" }}>
        <AttackDisplay attackType={attackType} />
        <ArmorDisplay armorType={armorType} />
      </div>
    </div>
  );
};
export default BossName;
