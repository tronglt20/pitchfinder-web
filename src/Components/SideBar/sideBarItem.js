import React from "react";
import { Link } from "react-router-dom";

function SideBarItem(props) {
	return (
		<Link
			to={props.navigateTo}
			className={`flex gap-3 items-center px-5 py-2 rounded-md text-white cursor-pointer ${
				props.isSelected ? "bg-primary" : "hover:bg-primary"
			} `}
			onClick={(event) => props.clickHandler(event, props.itemIndex)}
		>
			<div className="flex items-center">
				<span className="font-medium text-md">{props.content}</span>
			</div>
		</Link>
	);
}

export default SideBarItem;
