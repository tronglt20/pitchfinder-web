import * as React from "react";
import Header from "../../Components/ContentItemMaterials/header";
import OrderSearch from "./orderSearch";
import OrderTable from "./orderTable";
import { Box } from "@mui/material";

function Order() {
  return (
    <Box>
      <Header content="Order Management" />
      <OrderSearch />
      <OrderTable />
    </Box>
  );
}

export default Order;
