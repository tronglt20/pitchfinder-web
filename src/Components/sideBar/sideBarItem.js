import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdjustIcon from "@mui/icons-material/Adjust";
import { Link } from "react-router-dom";

function SideBarItem(props) {
  return (
    <ListItemButton
      selected={props.isSelected}
      onClick={(event) => props.clickHandler(event, props.itemIndex)}
      component={Link}
      to={props.navigateTo}
    >
      <ListItemIcon>
        <AdjustIcon />
      </ListItemIcon>
      <ListItemText primary={props.content} />
    </ListItemButton>
  );
}

export default SideBarItem;
