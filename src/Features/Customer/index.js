import React from "react";
import CustomerSearch from "./customerSearch";
import CustomerTable from "./customerTable";
import { Box } from "@mui/material";
import Header from "../../Components/ContentItemMaterials/header";

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
