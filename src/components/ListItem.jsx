import React from "react"

export default function ListItem(props){
    return(
        <a id={props.itemName} href="#" onClick={setLocation}>{props.itemName}</a>
    )
}