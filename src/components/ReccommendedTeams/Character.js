export default function Character({ displayName, name }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        textAlign: "center",
        fontSize: 24,
      }}
    >
      <img
        src={`https://api.ennead.cc/buruaka/image/lobby/${name}`}
        alt={name}
        height={81}
      />
      <p style={{ color: "#555555", fontWeight: 400 }}>{displayName}</p>
    </div>
  );
}
