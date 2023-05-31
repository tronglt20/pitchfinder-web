import * as React from "react";
import Header from "../../ContentItemMaterials/header";
import OrderSearch from "./orderSearch";
import OrderTable from "./orderTable";
import { Box } from "@mui/material";

function Order() {
  return (
    <Box>
      <Header content="Quản lý Đơn đặt sân" />
      <OrderSearch />
      <OrderTable />
    </Box>
  );
}

export default Order;
