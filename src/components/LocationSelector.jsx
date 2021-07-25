import React, {useState,useEffect} from "react"
import DropdownItem from "./DropdownItem"
import axios from "../axios";

export default function LocationSelector(props){
  
  const [locations, setlocations] = useState([])
  useEffect(()=>{
      async function fetchData(){
        const req = await axios.get("/locations");
        setlocations(req.data)
      }
      fetchData();
    },[]);

    return(
        <div className="location-selector">
        <div className="align-center display-flex">
          <img className="location-img" src={props.locationIcon} alt="location" />
          <div className="location-name" style={{position:"relative"}}>
            <span id="locationSpan">IIT BHU</span>
            <div id="dropdown-locations" className="search-products dropdown-content">
              <DropdownItem items={locations}/>
            </div>
          </div>
          <img onClick={showLocationDropdown} id="downBtn" className="down-btn" src={props.downBtn} alt="down" />
        </div>
      </div>
    )
}