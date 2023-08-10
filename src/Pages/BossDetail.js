import { useParams } from "react-router-dom";
import ToggleSwitch from "../components/bossDetail/ToggleSwitch/ToggleSwitch";
import BossName from "../components/bossDetail/RightPanel/BossName";
import { useEffect, useState } from "react";
export default function BossDetail() {
  const { bossName } = useParams();
  const [bossAttackType, setBossAttackType] = useState("");
  const [bossArmorType, setBossArmorType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState(1);
  const [selectedTerrain, setSelectedTerrain] = useState(1);
  const [firstTerrain, setFirstTerrain] = useState("");
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
    if (bossName === "Binah") {
      setFirstTerrain("Outdoors");
      setSecondTerrain("Urban");
    } else if (
      bossName === "ShiroKuro" ||
      bossName === "HOD" ||
      bossName === "Hieronymus"
    ) {
      setFirstTerrain("Indoors");
      setSecondTerrain("Urban");
    } else if (bossName === "Chesed" || bossName === "Perorozilla") {
      setFirstTerrain("Indoors");
      setSecondTerrain("Outdoors");
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
          </div>
        </div>
      </div>
    </div>
  );
}
