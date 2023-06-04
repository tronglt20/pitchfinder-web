import React from "react";
import { Route, Routes } from "react-router-dom";
import General from "./ContentItems/General/general";
import Order from "./ContentItems/Order/order";
import Pitch from "./ContentItems/Pitch/pitch";
import Customer from "./ContentItems/Customer/customer";
import TestRedux from "./ContentItems/TestRedux/testRedux";
import { Box } from "@mui/material";

function SideContent() {
  return (
    <Box
      sx={{
        width: "80%",
        paddingX: "47px",
        paddingY: "61px",
      }}
    >
      <Routes>
        <Route path="/dashboard" element={<General />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/testRedux" element={<TestRedux />} />
      </Routes>
    </Box>
  );
}

export default SideContent;
