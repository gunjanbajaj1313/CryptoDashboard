import React from "react";
import Button from "../Button/button";
import MobileDrawer from "./drawer";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <h1>
        CryptoStats<span style={{ color: "var(--white)" }}>.</span>
      </h1>
      <div className="links-flex">
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/compare">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">Watchlist</p>
        </a>
        <a href="/dashboard">
        <Button
          text="Dashboard"
          onClick={() => {
            console.log("btn-clicked!!!");
          }}
        />
        </a>
      </div>
      <MobileDrawer />
    </div>
  );
}

export default Header;