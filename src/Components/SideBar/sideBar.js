import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SideBarItem from "./sideBarItem";
import AvatarMenu from "./avatarMenu";

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const sideBarItems = [
    {
      name: "dashboard",
      description: "Dashboard",
    },
    {
      name: "order",
      description: "Order",
    },
    {
      name: "pitch",
      description: "Pitch",
    },
    {
      name: "customer",
      description: "Customer",
    },
    // {
    //   name: "testRedux",
    //   description: "Test Redux",
    // },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        maxWidth: 360,
        minWidth: 300,
        bgcolor: "#EDF0F7",
        height: "100vh",
      }}
    >
      <Box sx={{ p: 3, bgcolor: "blue", height: "80px", color: "white" }}>
        Logo
      </Box>
      <List component="nav" aria-label="main mailbox folders">
        {sideBarItems.map((element, index) => (
          <SideBarItem
            content={element.description}
            itemIndex={index}
            clickHandler={handleListItemClick}
            navigateTo={element.name}
            isSelected={index === selectedIndex}
          />
        ))}
      </List>
      <Box sx={{ marginTop: "auto" }}>
        <AvatarMenu />
      </Box>
    </Box>
  );
}
