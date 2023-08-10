import Team from "./Team";
import "../../index.css";

export default function TeamList() {
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
        <Team />
        <Team />
        <Team />
        <Team />
      </div>
    </div>
  );
}
