import "../../index.css";
export default function BossBanner({ status }) {
  return (
    <div
      style={{
        position: "absolute",
        right: 0,
        bottom: 10,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          height: 35,
          background:
            status === "Upcomming"
              ? "#fff"
              : status === "Upcomming7"
              ? "linear-gradient(270deg, #FF9898 0%, #FF8585 100%)"
              : "linear-gradient(262deg, #FFEB85 0%, #FFCE50 100%)",
          borderTopLeftRadius: 16,
          position: "relative",
          top: 4,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <p style={{ fontSize: 12 }}>Current Raid Boss : Binah( Indoors )</p>
          <p style={{ fontSize: 12 }}>Ends in : dd / hh / mm</p>
        </div>
      </div>
      <img src="/images/Boss/Binah/Binah_Banner.png" alt="Binah" height={120} />
    </div>
  );
}
