import React, {useEffect, useState} from "react";
import "../styles.css";
import locationImg from "../images/image 87.png";
import downBtn from "../images/image 88.png";
import line from "../images/Line 20.png";
import LocationSelector from "./LocationSelector";
import SearchBox from "./SearchBox";

function Search() {
  return (
    <div className="search-div display-flex justify-space-between align-center">
    
      <LocationSelector locationIcon={locationImg} downBtn={downBtn}/>

      <div style={{ padding: "7px" }}>
        <img style={{ width: "65%" }} src={line} alt="|" />
      </div>

      <SearchBox/>
    </div>
  );
}
export default Search;
