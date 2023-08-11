import { Link } from "react-router-dom";
import "../../index.css";

const bossIconUrl = [
  { bossName: "Binah", url: "/images/Boss/Binah/Binah_Icon.png" },
  { bossName: "ShiroKuro", url: "/images/Boss/ShiroKuro/ShiroKuro_Icon.png" },
  { bossName: "Chesed", url: "/images/Boss/Chesed/Chesed_Icon.png" },
  {
    bossName: "Hieronymus",
    url: "/images/Boss/Hieronymus/Hieronymus_Icon.png",
  },
  {
    bossName: "Perorozilla",
    url: "/images/Boss/Perorozilla/Perorozilla_Icon.png",
  },
  { bossName: "Hod", url: "/images/Boss/Hod/Hod_Icon.png" },
  { bossName: "Goz", url: "/images/Boss/Goz/Goz_Icon.png" },
  { bossName: "Kaiten", url: "/images/Boss/Kaiten/Kaiten_Icon.png" },
];

export default function BossIcon({ bossName }) {
  const url = bossIconUrl.find((icon) => icon.bossName === bossName).url;
  return (
    <Link to={bossName} style={{ display: "flex" }}>
      <img src={url} alt={bossName} height={200} className="hover-image" />
    </Link>
  );
}
