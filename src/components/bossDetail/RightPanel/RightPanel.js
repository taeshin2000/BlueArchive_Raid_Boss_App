import React from "react";

import BossName from "./BossName";
import TeamList from "../../ReccommendedTeams/TeamList";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const RightPanel = ({
  bossName,
  bossArmorType,
  bossAttackType,
  selectedDifficulty,
  setSelectedDifficulty,
  selectedTerrain,
  setSelectedTerrain,
  firstTerrain,
  secondTerrain,
}) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "16px 10px",
      }}
    >
      <BossName
        name={bossName}
        armorType={bossArmorType}
        attackType={bossAttackType}
      />
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <p>Boss Difficulty:</p>
        <ToggleSwitch
          selectedChoice={selectedDifficulty}
          setSelectedChoice={setSelectedDifficulty}
          isDifficulty={true}
          firstChoice={"Normal-Extreme"}
          secondChoice={"Insane"}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <p>Terrain:</p>
        <ToggleSwitch
          selectedChoice={selectedTerrain}
          setSelectedChoice={setSelectedTerrain}
          isDifficulty={false}
          firstChoice={firstTerrain}
          secondChoice={secondTerrain}
        />
      </div>
      <p>Recommended Teams :</p>
      <TeamList
        bossName={bossName}
        difficulty={selectedDifficulty}
        terrainIndex={selectedTerrain}
      />
    </div>
  );
};
export default RightPanel;
