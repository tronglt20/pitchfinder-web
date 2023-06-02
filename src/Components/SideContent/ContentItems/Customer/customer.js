import React from "react";
import Header from "../../ContentItemMaterials/header";
import CustomerSearch from "./customerSearch";
import CustomerTable from "./customerTable";
import { Box } from "@mui/material";

function Customer() {
  return (
    <Box>
      <Header content="Customer Management" />
      <CustomerSearch />
      <CustomerTable />
    </Box>
  );
}

export default Customer;
