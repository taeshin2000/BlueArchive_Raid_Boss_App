import "../index.css";
import Navbar from "../components/Utilities/NavBar/NavBar";
import Footer from "../components/Utilities/NavBar/Footer";

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
          padding: 0,
          width: "100%",
          margin: 0,
          fontFamily: "sans-serif",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          gap: 20,
        }}
      >
        <p style={{ fontSize: 50, fontWeight: "bold" }}>
          This is a fan-made website.
        </p>
        <p style={{ fontSize: 25, fontWeight: "bold" }}>
          We made this website to practice front-end web development.
        </p>
        <p style={{ fontSize: 25, fontWeight: "bold" }}>
          We might update the website in the future.
        </p>
        <p>
          Raid Boss Teams Data credit to{" "}
          <a
            href={"https://www.facebook.com/Seamindz"}
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            https://www.facebook.com/Seamindz
          </a>
        </p>
        <p>
          Bosses Information credit to{" "}
          <a
            href={"https://bluearchive.wiki/wiki/Raid"}
            target="_blank"
            style={{ textDecoration: "none", color: "#fff" }}
          >
            https://bluearchive.wiki/wiki/Raid
          </a>
        </p>
        <p>
          All Rights Reserved to © 2021 NEXON Korea Corp. & NEXON GAMES Co.,
        </p>
      </div>
      <Footer />
    </div>
  );
}
