import React from "react";
import "../styles.css";
import SearchWidget from "./SearchWidget";

function Header() {
  return (
    <div className="header justify-space-between">
      <div className="title-div">
        <h1 className="heading-title">Dawaaii</h1>
      </div>
      <SearchWidget />
    </div>
  );
}
export default Header;
