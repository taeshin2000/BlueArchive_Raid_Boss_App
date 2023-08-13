import React from "react";
import NavItem from "./NavItem";

const Navbar = ({ pageNumber }) => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        left: 0,
        width: "100%",
        background: "rgba(51, 51, 51, 0.21)",
        borderRadius: "0px 0px 20px 20px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: 50,
      }}
    >
      <div
        style={{
          padding: "10px 20px",
          background: "#EEE",
          width: "fit-content",
          borderRadius: "0px 0px 0px 20px",
        }}
      >
        <img
          src="BlueArchive_Raid_Boss_App/images/Blue_Archive_logo.svg.png"
          width={150}
        ></img>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <NavItem
          itemName={"Bosses Detail"}
          itemNumber={1}
          pageNumber={pageNumber}
          linkTo={"/boss"}
        />
        <NavItem
          itemName={"About"}
          itemNumber={2}
          pageNumber={pageNumber}
          linkTo={"/about"}
        />
      </div>
    </div>
  );
};
export default Navbar;
