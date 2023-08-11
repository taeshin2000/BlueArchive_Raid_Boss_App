import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { bossList } from "../BossList";

import RightPanel from "../components/bossDetail/RightPanel/RightPanel";
import SkillSelector from "../components/bossDetail/LeftPanel/SkillSelector";
export default function BossDetail() {
  const { bossName } = useParams();
  const [bossAttackType, setBossAttackType] = useState("");
  const [bossArmorType, setBossArmorType] = useState("");
  const [selectedDifficulty, setSelectedDifficulty] = useState(1);
  const [selectedTerrain, setSelectedTerrain] = useState(1);
  const [firstTerrain, setFirstTerrain] = useState("HI");
  const [secondTerrain, setSecondTerrain] = useState("");
  const [normalSkills, setNormalSkills] = useState([]);
  const [insaneSkills, setInsaneSkills] = useState([]);
  const [selectedSkill, setSelectedSkill] = useState(1);

  useEffect(() => {
    setStartDifficultyDisplay();
    setTerrain();
    setArmorDisplay();
    setAttackDisplay();
    setBossSkills();
  }, []);

  useEffect(() => {
    setAttackDisplay();
    if (selectedSkill > normalSkills.length) {
      setSelectedSkill(1);
    }
  }, [selectedDifficulty]);

  function setArmorDisplay() {
    const armor = bossList?.find(
      (boss) => boss?.bossName === bossName
    )?.armorType;
    if (armor) {
      setBossArmorType(armor);
    }
    // if (bossName === "Binah" || bossName === "Chesed" || bossName === "HOD") {
    //   setBossArmorType("Heavy Armor");
    // } else if (
    //   bossName === "ShiroKuro" ||
    //   bossName === "Perorozilla" ||
    //   bossName === "Goz"
    // ) {
    //   setBossArmorType("Special Armor");
    // } else {
    //   setBossArmorType("Light Armor");
    // }
  }

  function setAttackDisplay() {
    // if (selectedDifficulty !== 2) {
    //   setBossAttackType("Normal");
    // } else {
    //   if (bossName === "Binah" || bossName === "ShiroKuro") {
    //     setBossAttackType("Penetration");
    //   } else if (bossName === "Perorozilla" || bossName === "HOD") {
    //     setBossAttackType("Mystic");
    //   } else {
    //     setBossAttackType("Explosive");
    //   }
    // }
    const attack = bossList?.find(
      (boss) => boss?.bossName === bossName
    )?.attackType;
    if (attack && selectedDifficulty === 2) {
      setBossAttackType(attack);
    } else {
      setBossAttackType("Normal");
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

  function setBossSkills() {
    const skills = bossList?.find(
      (boss) => boss?.bossName === bossName
    )?.skills;
    if (skills) {
      setNormalSkills(skills[0].normal);
      setInsaneSkills(skills[0].insane);
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
              height: "100%",
              width: "100%",
              flexDirection: "column",
              padding: 40,
              gap: 20,
              maxWidth: "50%",
              paddingTop: 60,
            }}
          >
            <picture style={{ alignSelf: "center", borderRadius: 4 }}>
              <source
                style={{ borderRadius: 4, maxHeight: 300 }}
                srcSet={`/images/Boss/${bossName}/${bossName}.webp`}
                type="image/webp"
              />
              <img
                style={{ borderRadius: 4, maxHeight: 300 }}
                src={`/images/Boss/${bossName}/${bossName}.webp`}
              />
            </picture>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                height: 75,
              }}
            >
              <div>Boss Skills :</div>
              <div style={{ display: "flex" }}>
                {(selectedDifficulty === 1 ? normalSkills : insaneSkills)?.map(
                  (skill, index) => (
                    <SkillSelector
                      imageSrc={skill.url}
                      selectedSkill={selectedSkill}
                      skillNumber={index + 1}
                      setSelectedSkill={setSelectedSkill}
                    />
                  )
                )}
              </div>
            </div>
            <div
              style={{
                width: "100%",
                backgroundColor: "#fff",
                color: "#333",
                padding: 20,
                borderRadius: 10,
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              <div style={{ fontSize: 20 }}>
                {selectedDifficulty === 1
                  ? normalSkills[selectedSkill - 1]?.skillname
                  : insaneSkills[selectedSkill - 1]?.skillname}
              </div>
              <div
                style={{
                  fontWeight: 300,
                  wordWrap: "break-word",
                  whiteSpace: "initial",
                }}
              >
                {selectedDifficulty === 1
                  ? normalSkills[selectedSkill - 1]?.description
                  : insaneSkills[selectedSkill - 1]?.description}
              </div>
            </div>
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
