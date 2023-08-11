import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { bossList } from "../BossList";

import RightPanel from "../components/bossDetail/RightPanel/RightPanel";

export default function BossDetail() {
  const { bossName } = useParams();
  const [bossAttackType, setBossAttackType] = useState("");
  const [bossArmorType, setBossArmorType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState(1);
  const [selectedTerrain, setSelectedTerrain] = useState(1);
  const [firstTerrain, setFirstTerrain] = useState("HI");
  const [secondTerrain, setSecondTerrain] = useState("");

  useEffect(() => {
    setStartDifficultyDisplay();
    setTerrain();
    setArmorDisplay();
    setAttackDisplay();
  }, []);

  useEffect(() => {
    console.log(selectedDifficulty);
    setAttackDisplay();
  }, [selectedDifficulty]);

  function setArmorDisplay() {
    if (bossName === "Binah" || bossName === "Chesed" || bossName === "HOD") {
      setBossArmorType("Heavy Armor");
    } else if (
      bossName === "ShiroKuro" ||
      bossName === "Perorozilla" ||
      bossName === "Goz"
    ) {
      setBossArmorType("Special Armor");
    } else {
      setBossArmorType("Light Armor");
    }
  }

  function setAttackDisplay() {
    if (selectedDifficulty !== 2) {
      setBossAttackType("Normal");
    } else {
      if (bossName === "Binah" || bossName === "ShiroKuro") {
        setBossAttackType("Penetration");
      } else if (bossName === "Perorozilla" || bossName === "HOD") {
        setBossAttackType("Mystic");
      } else {
        setBossAttackType("Explosive");
      }
    }
  }

  function setStartDifficultyDisplay() {
    setSelectedDifficulty(1);
  }

  function setTerrain() {
    const terrains = bossList?.find(
      (boss) => boss?.bossName === bossName
    )?.terrain;
    if (terrains) {
      setFirstTerrain(terrains[0]);
      setSecondTerrain(terrains[1]);
    }
  }

  return (
    <div
      style={{
        height: "100vh",
        background: `url("/images/Boss/${bossName}/${bossName}_BG.jpg"), lightgray 50% / cover no-repeat`,
        backgroundPosition: "center,center",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          gap: 25,
          background:
            "linear-gradient(180deg, rgb(165, 166, 246,.6) 0%, rgba(151, 71, 255, .6) 100%)",
        }}
      >
        <div style={{ height: "100%", width: "100%", display: "flex" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              height: "100%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 150,
            }}
          >
            <p>Left</p>
          </div>
          <RightPanel
            bossName={bossName}
            bossArmorType={bossArmorType}
            bossAttackType={bossAttackType}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
            selectedTerrain={selectedTerrain}
            setSelectedTerrain={setSelectedTerrain}
            firstTerrain={firstTerrain}
            secondTerrain={secondTerrain}
          />
        </div>
      </div>
    </div>
  );
}
