import Character from "./Character";

export default function Team({ team, index }) {
  return (
    <div
      style={{
        padding: 10,
        backgroundColor: "#FFF",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: 7,
        borderRadius: 10,
      }}
    >
      <div
        style={{
          height: 6,
          width: 45,
          backgroundColor: "#9D70FB",
          borderRadius: "10px",
          margin: "auto",
        }}
      ></div>
      <h3
        style={{
          fontSize: 24,
          fontWeight: "bold",
          borderBottom: "3px solid rgba(0, 0, 0, 0.20)",
          paddingBottom: 5,
          color: "#9D70FB",
        }}
      >
        Team {index + 1}
      </h3>
      <span style={{ fontSize: 20, color: "#9D70FB", fontWeight: 400 }}>
        Approximate Score : {team.score}
      </span>
      <div
        style={{
          display: "flex",
          backgroundColor: "rgba(0, 0, 0, 0.10)",
          justifyContent: "center",
          padding: 5,
          borderRadius: 10,
        }}
      >
        <Character
          displayName={team.lineUp[0].displayName}
          name={team.lineUp[0].name}
        />
        <Character
          displayName={team.lineUp[1].displayName}
          name={team.lineUp[1].name}
        />
        <Character
          displayName={team.lineUp[2].displayName}
          name={team.lineUp[2].name}
        />
        <Character
          displayName={team.lineUp[3].displayName}
          name={team.lineUp[3].name}
        />
        <div
          style={{
            width: 5,
            backgroundColor: "rgba(0, 0, 0, 0.30)",
            rotate: "10deg",
            marginRight: 5,
            marginBottom: 10,
          }}
        ></div>
        <Character
          displayName={team.lineUp[4].displayName}
          name={team.lineUp[4].name}
        />{" "}
        <Character
          displayName={team.lineUp[5].displayName}
          name={team.lineUp[5].name}
        />
      </div>
    </div>
  );
}
