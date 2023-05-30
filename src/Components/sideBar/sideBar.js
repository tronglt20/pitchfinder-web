import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import SideBarItem from "./sideBarItem";

export default function SideBar() {
  const [selectedItem, setSelectedItem] = React.useState("");

  const handleListItemClick = (content) => {
    setSelectedItem(content);
  };

  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Box sx={{ p: 3 }}>Logo</Box>
      <List component="nav" aria-label="main mailbox folders">
        <SideBarItem
          clickHandler={handleListItemClick}
          selected={selectedItem}
          content="Tổng quan"
        />
        <SideBarItem
          clickHandler={handleListItemClick}
          selected={selectedItem}
          content="Quản lý Đơn đặt sân"
        />
        <SideBarItem
          clickHandler={handleListItemClick}
          selected={selectedItem}
          content="Quản lý Sân bóng"
        />
        <SideBarItem
          clickHandler={handleListItemClick}
          selected={selectedItem}
          content="Quản lý khách hàng"
        />
      </List>
    </Box>
  );
}
