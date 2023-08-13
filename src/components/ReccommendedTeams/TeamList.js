import Team from "./Team";
import "../../index.css";
import { bossList } from "../../BossList";
export default function TeamList({ bossName, difficulty, terrainIndex }) {
  const team = bossList.find((boss) => boss.bossName === bossName)?.teams[
    terrainIndex - 1
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flexGrow: 1,
        overflow: "auto",
        padding: 12,
        backgroundColor: "rgba(0, 0, 0, 0.20)",
        borderRadius: 10,
      }}
    >
      <div
        className="teamScrollContainer"
        style={{
          overflowY: "scroll",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: 12,
        }}
      >
        {(difficulty === 1 ? team?.normal : team?.insane)?.map(
          (team, index) => (
            <Team
              team={team}
              index={index}
              key={index}
              twoTeams={team.lineUp.length > 6}
            />
          )
        )}
      </div>
    </div>
  );
}
