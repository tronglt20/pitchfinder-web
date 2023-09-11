import React from "react";
import CustomerSearch from "./customerSearch";
import CustomerTable from "./customerTable";
import Header from "../../Components/ContentItemMaterials/header";

function Customer() {
  return (
    <>
      <Header content="Customer Management" />
      <CustomerSearch />
      <CustomerTable />
    </>
  );
}

export default Customer;
