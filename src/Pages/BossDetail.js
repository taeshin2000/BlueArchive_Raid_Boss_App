import testBG from "../BG_CS_PV4_048.jpg";
export default function BossDetail() {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${testBG})`,
          backgroundPosition: "center,center",
        }}
      >
        <p
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            padding: 0,
            margin: 0,
            fontSize: 200,
            fontFamily: "sans-serif",
            fontWeight: "bolder",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            background:
              "linear-gradient(180deg, rgb(165, 166, 246,.5) 0%, rgba(151, 71, 255, .5) 100%)",
          }}
        >
          Boss Detail
        </p>
      </div>
    </div>
  );
}
