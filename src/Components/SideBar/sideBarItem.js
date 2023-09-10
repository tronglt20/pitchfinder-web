import React from "react";
import { Link } from "react-router-dom";

function SideBarItem(props) {
  return (
    <Link 
      to={props.navigateTo} 
      className={`flex gap-3 items-center px-5 py-2 rounded-3xl font-medium cursor-pointer text-[16px] ${props.isSelected ? 'bg-primary text-white' : 'hover:bg-primary hover:text-white'} `} 
      onClick={(event) => props.clickHandler(event, props.itemIndex)}
    >
      <div className="flex items-center">
        <span className="text-sm">{props.content}</span>
      </div>
    </Link>
  );
}

export default SideBarItem;
