import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../../../index.css";

const NavItem = ({ itemName, itemNumber, pageNumber, linkTo }) => {
  const navigate = useNavigate();
  return (
    <div
      className={itemNumber === pageNumber ? "navItem-active" : "navItem"}
      onClick={() => {
        navigate(linkTo);
      }}
      style={{
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        padding: "0px 32px 0px 32px",
        color: "white",
        borderBottom:
          itemNumber === pageNumber
            ? "3px solid rgba(255, 255, 255, 0.50)"
            : "none",
        fontWeight: itemNumber === pageNumber ? "bold" : "normal",
        userSelect: "none",
      }}
    >
      <p> {itemName}</p>
    </div>
  );
};
export default NavItem;
