import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AdjustIcon from "@mui/icons-material/Adjust";

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  //   const handleListItemClick = (
  //     event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  //     index: number
  //   ) => {
  //     setSelectedIndex(index);
  //   };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box sx={{ p: 3 }}>Logo</Box>
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton
          selected={selectedIndex === 0}
          //   onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 1}
          //   onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <AdjustIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
      </List>
    </Box>
  );
}
