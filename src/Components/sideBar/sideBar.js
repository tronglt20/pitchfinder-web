import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SideBarItem from "./sideBarItem";

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const handleListItemClick = () => {
    setSelectedIndex(key);
  };

  const sideBarItems = [
    "Tổng quan",
    "Quản lý Đơn đặt sân",
    "Quản lý Sân bóng",
    "Quản lý khách hàng",
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box sx={{ p: 3 }}>Logo</Box>
      <List component="nav" aria-label="main mailbox folders">
        {sideBarItems.map((element, index) => (
          <SideBarItem
            content={element}
            key={index}
            clickHandler={handleListItemClick}
            isSelected={index === selectedIndex}
          />
        ))}
        ;
      </List>
    </Box>
  );
}
