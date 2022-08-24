import React from 'react';
import {NavLink} from 'react-router-dom';
function ListItem(props){
console.log("className", props.text.toLowerCase());
return (
    <li>
    <NavLink className={(navData) => (navData.isActive ? "navLinkActive listItem" : 'listItem')} to={`/${props.text.toLowerCase()}`}>
        {props.children}
        <p>{props.text}</p>
        </NavLink>  
    </li>
   
)
}

export default ListItem;