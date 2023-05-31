import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SideBarItem from "./sideBarItem";

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  const sideBarItems = [
    {
      name: "general",
      description: "Tổng quan",
    },
    {
      name: "order",
      description: "Quản lý Đơn đặt sân",
    },
    {
      name: "pitch",
      description: "Quản lý Sân bóng",
    },
    {
      name: "customer",
      description: "Quản lý Khách hàng",
    },
  ];

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
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
        ;
      </List>
    </Box>
  );
}
