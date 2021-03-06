import React from "react"
import ListItem from "./ListItem"


function DropdownItem(props){
    return(

        <div>
            {
                props.items.map(item=>{
                return <ListItem key={item._id} itemName={item.name}/>
                })
            }
        </div>

    )
}

export default DropdownItem