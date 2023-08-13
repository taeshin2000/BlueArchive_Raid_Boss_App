import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { bossList } from "../BossList";

import RightPanel from "../components/bossDetail/RightPanel/RightPanel";
import SkillSelector from "../components/bossDetail/LeftPanel/SkillSelector";
import Navbar from "../components/Utilities/NavBar/NavBar";
import Footer from "../components/Utilities/NavBar/Footer";

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

  const navigate = useNavigate();

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
  }

  function setAttackDisplay() {
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
        background: `url("BlueArchive_Raid_Boss_App/images/Boss/${bossName}/${bossName}_BG.jpg"), lightgray 50% / cover no-repeat`,
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
          flexDirection: "column",
          alignItems: "center",
          color: "white",
          background:
            "linear-gradient(180deg, rgb(165, 166, 246,.6) 0%, rgba(151, 71, 255, .6) 100%)",
        }}
      >
        <Navbar pageNumber={1} />
        <div style={{ width: "100%", display: "flex", overflow: "auto" }}>
          <div
            style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              gap: 12,
              maxWidth: "50%",
              padding: 20,
            }}
          >
            <p
              onClick={() => {
                navigate("/boss");
              }}
              style={{ fontWeight: 500, userSelect: "none", cursor: "pointer" }}
            >
              {"<- Bosses"}
            </p>
            <picture style={{ alignSelf: "center", borderRadius: 8 }}>
              <source
                style={{ borderRadius: 8, maxHeight: 240 }}
                srcSet={`BlueArchive_Raid_Boss_App/images/Boss/${bossName}/${bossName}.webp`}
                type="image/webp"
              />
              <img
                style={{ borderRadius: 8, maxHeight: 240 }}
                src={`BlueArchive_Raid_Boss_App/images/Boss/${bossName}/${bossName}.webp`}
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
                  fontWeight: 500,
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
        <Footer />
      </div>
    </div>
  );
}
