import "../index.css";
import Navbar from "../components/Utilities/NavBar/NavBar";

export default function About() {
  return (
    <div
      className="gradient-background"
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar pageNumber={2} />
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
        About Page
      </div>
    </div>
  );
}
