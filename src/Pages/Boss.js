import { Link, Outlet } from "react-router-dom";
import BossIcon from "../components/Boss/BossIcon";
import BossBanner from "../components/Boss/BossBanner";
import "../index.css";
import Navbar from "../components/Utilities/NavBar/NavBar";

export default function Boss() {
  return (
    <div
      className="gradient-background"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar pageNumber={1} />
      <div
        style={{
          flex: 1,
          width: "100%",
          padding: 0,
          margin: 0,
          fontSize: 50,
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: 20,
        }}
      >
        <div style={{ display: "flex" }}>
          <BossIcon bossName={"Binah"} />
          <BossIcon bossName={"ShiroKuro"} />
          <BossIcon bossName={"Hod"} />
          <BossIcon bossName={"Chesed"} />
        </div>
        <div style={{ display: "flex" }}>
          <BossIcon bossName={"Kaiten"} />
          <BossIcon bossName={"Perorozilla"} />
          <BossIcon bossName={"Hieronymus"} />
        </div>
        <BossBanner />
      </div>

      <Outlet />
    </div>
  );
}
