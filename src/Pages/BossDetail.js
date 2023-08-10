import { useParams } from "react-router-dom";
import ToggleSwitch from "../components/bossDetail/ToggleSwitch/ToggleSwitch";
import TeamList from "../components/ReccommendedTeams/TeamList";
export default function BossDetail() {
  const { bossName } = useParams();
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
            <div style={{ fontSize: 48 }}>{bossName}</div>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <p>Boss Difficulty:</p>
              <ToggleSwitch
                isDifficulty={true}
                firstChoice={"Normal-Extreme"}
                secondChoice={"Insane"}
              />
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
              <p>Terrain:</p>
              <ToggleSwitch
                isDifficulty={false}
                firstChoice={"Indoors"}
                secondChoice={"OutDoors"}
              />
            </div>
            <p>Recommended Teams :</p>
            <TeamList />
          </div>
        </div>
      </div>
    </div>
  );
}
