import React from "react";
import Header from "../../Components/ContentItemMaterials/header";
import { OrderSearch } from "./orderSearch";
import OrderTable from "./orderTable";

export const Order = () => {
  return (
    <>
      <Header content="Order Management" />
      <OrderSearch />
      <OrderTable />
    </>
  );
}


