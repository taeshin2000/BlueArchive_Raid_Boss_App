import { Link, Outlet } from "react-router-dom";

export default function Boss() {
  function HoverIn(event) {
    event.target.style.color = "#666";
  }
  function HoverOut(event) {
    event.target.style.color = "#fff";
  }
  return (
    <div
      style={{
        height: "100vh",
        background:
          "linear-gradient(180deg, rgb(165, 166, 246,1) 0%, rgba(151, 71, 255, 1) 100%)",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          padding: 0,
          margin: 0,
          fontSize: 50,
          fontFamily: "sans-serif",
          fontWeight: "bolder",
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          gap: 20,
        }}
      >
        <Link
          onMouseOver={HoverIn}
          onMouseOut={HoverOut}
          style={{ color: "white", textDecoration: "none" }}
          to={"Binah"}
        >
          Binah
        </Link>
        <Link
          onMouseOver={HoverIn}
          onMouseOut={HoverOut}
          style={{ color: "white", textDecoration: "none" }}
          to={"ShiroKuro"}
        >
          Shiro Kuro
        </Link>
        <Link
          onMouseOver={HoverIn}
          onMouseOut={HoverOut}
          style={{ color: "white", textDecoration: "none" }}
          to={"HOD"}
        >
          HOD
        </Link>
        <Link
          onMouseOver={HoverIn}
          onMouseOut={HoverOut}
          style={{ color: "white", textDecoration: "none" }}
          to={"Chesed"}
        >
          Chesed
        </Link>
        <Link
          onMouseOver={HoverIn}
          onMouseOut={HoverOut}
          style={{ color: "white", textDecoration: "none" }}
          to={"Perorozilla"}
        >
          Perorozilla
        </Link>
        <Link
          onMouseOver={HoverIn}
          onMouseOut={HoverOut}
          style={{ color: "white", textDecoration: "none" }}
          to={"Hieronymus"}
        >
          Hieronymus
        </Link>
        {/* <Link to={"Goz"}>Goz</Link> */}
      </div>
      <Outlet />
    </div>
  );
}
