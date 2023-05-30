import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdjustIcon from "@mui/icons-material/Adjust";

function SideBarItem(props) {
  return (
    <ListItemButton
      selected={props.selected === props.content}
      onClick={props.clickHandler}
    >
      <ListItemIcon>
        <AdjustIcon />
      </ListItemIcon>
      <ListItemText primary={props.content} />
    </ListItemButton>
  );
}

export default SideBarItem;
