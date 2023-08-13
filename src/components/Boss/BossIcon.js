import { Link } from "react-router-dom";
import "../../index.css";

const bossIconUrl = [
  {
    bossName: "Binah",
    url: "/BlueArchive_Raid_Boss_App/images/Boss/Binah/Binah_Icon.png",
  },
  {
    bossName: "ShiroKuro",
    url: "/BlueArchive_Raid_Boss_App/images/Boss/ShiroKuro/ShiroKuro_Icon.png",
  },
  {
    bossName: "Chesed",
    url: "/BlueArchive_Raid_Boss_App/images/Boss/Chesed/Chesed_Icon.png",
  },
  {
    bossName: "Hieronymus",
    url: "/BlueArchive_Raid_Boss_App/images/Boss/Hieronymus/Hieronymus_Icon.png",
  },
  {
    bossName: "Perorozilla",
    url: "/BlueArchive_Raid_Boss_App/images/Boss/Perorozilla/Perorozilla_Icon.png",
  },
  {
    bossName: "HOD",
    url: "/BlueArchive_Raid_Boss_App/images/Boss/HOD/HOD_Icon.png",
  },
  {
    bossName: "Goz",
    url: "/BlueArchive_Raid_Boss_App/images/Boss/Goz/Goz_Icon.png",
  },
  {
    bossName: "Kaiten",
    url: "/BlueArchive_Raid_Boss_App/images/Boss/Kaiten/Kaiten_Icon.png",
  },
];

export default function BossIcon({ bossName }) {
  const url = bossIconUrl.find((icon) => icon.bossName === bossName).url;
  return (
    <Link to={bossName} style={{ display: "flex" }}>
      <img src={url} alt={bossName} height={200} className="hover-image" />
    </Link>
  );
}
