import React, {useState, useEffect} from "react"
import axios from "../axios"
import searchBtn from "../images/image 86.png";
import DropdownItem from "./DropdownItem"

export default function SearchBox(){

    const [productsList, setproductsList] = useState([])
    const [initialList, setinitialList] = useState([])

    useEffect(()=>{
      async function fetchData(){
        const req = await axios.get("/product");
        setinitialList(req.data)
        setproductsList(req.data)
      }
      fetchData();
    },[]);

    function filterList(e){
      var updatedList = initialList;
      console.log(updatedList)
      updatedList.filter(listItem => {
        return listItem.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      })
      console.log(updatedList)
      setproductsList(updatedList)
    }

    return(
        <div className="search-box align-center display-flex">
        <img className="search-btn" src={searchBtn} alt="" />
        <label htmlFor="searchBox"></label>
        <div className="dropdown">
          <input onKeyDown={showDropdown} onChange={filterList} list="products" type="text" name="product" placeholder="Search for products" id="searchBox" />
          <div id="dropdown-products" className="search-products dropdown-content">
          <DropdownItem items={productsList}/>
          </div>
        </div>
      </div>
    )
}