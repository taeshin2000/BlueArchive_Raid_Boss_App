import { useEffect } from "react";
import "../../index.css";
import { useState } from "react";
export default function BossBanner({ className }) {
  const [raidData, setRaidData] = useState(null);
  const [raidState, setRaidState] = useState("");
  useEffect(() => {
    async function getRaidData() {
      try {
        const response = await fetch("https://api.ennead.cc/buruaka/raid");
        const data = await response.json();
        if (data.current.length !== 0) {
          setRaidData(data.current[0]);
          setRaidState("Current");
        } else {
          setRaidData(data.upcoming[0]);
          setRaidState("Upcoming");
        }
      } catch (error) {
        console.error("Error fetching data", error);
      }
    }
    getRaidData();

    //getData every minute
    setInterval(() => {
      getRaidData();
    }, 60000);
  }, []);

  const currentTime = new Date().getTime();

  //change 1 to decrease time data +1 = -1hour
  const timeDiff = 1 * 60 * 60 * 1000;

  const timeDifference =
    raidState === "Current"
      ? raidData?.endAt - timeDiff - currentTime
      : raidData?.startAt - timeDiff - currentTime;
  //days hours minuts
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const lessThan7 = days < 7;
  const hours = Math.floor(
    (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  //display in format dd/hh/mm
  const displayTime = `${
    raidState === "Current" ? "Ends in" : "Starts in"
  } : ${days} d / ${hours} h / ${minutes} m`;

  //date month year
  const date = new Date(raidData?.startAt - timeDiff);
  const day = date.getDate();
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  //display in format dd/mm/yy
  const displayDate = `Start date : ${day} / ${month} / ${year}`;

  return (
    <div className={className}>
      <div
        style={{
          height: 45,
          background:
            raidState === "Upcoming" && !lessThan7
              ? "#fff"
              : raidState === "Upcoming" && lessThan7
              ? "linear-gradient(270deg, #FF9898 0%, #FF8585 100%)"
              : "linear-gradient(262deg, #FFEB85 0%, #FFCE50 100%)",
          borderTopLeftRadius: 16,
          position: "relative",
          top: 4,
        }}
      >
        {raidData ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: 10,
              color: raidState === "Upcoming" && !lessThan7 ? "#555" : "#fff",
            }}
          >
            <p style={{ fontSize: 12 }}>
              {raidState} Raid Boss : {raidData.bossName?.split("_")[0]} (
              {raidData.bossName.split("_")[1] === "Street"
                ? "Urban"
                : raidData.bossName.split("_")[1]
                ? raidData.bossName.split("_")[1]
                : "ym"}
              )
            </p>
            <p style={{ fontSize: 12 }}>
              {raidState === "Upcoming" && !lessThan7
                ? displayDate
                : displayTime}
            </p>
          </div>
        ) : null}
      </div>
      {raidData ? (
        <img
          src={`/images/Boss/${raidData.bossName?.split("_")[0]}/${
            raidData.bossName.split("_")[0]
          }_Banner.png`}
          alt="Binah"
          height={120}
        />
      ) : null}
    </div>
  );
}
