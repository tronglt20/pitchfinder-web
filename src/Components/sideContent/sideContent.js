import React from "react";
import { Route, Routes } from "react-router-dom";
import General from "./ContentItems/general";
import Order from "./ContentItems/order";
import Pitch from "./ContentItems/pitch";
import Customer from "./ContentItems/customer";
import { Box, Stack } from "@mui/material";

function SideContent() {
  return (
    <Box sx={{ bgcolor: "#cccccc", width: "80%" }}>
      <Routes>
        <Route path="/general" element={<General />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </Box>
  );
}

export default SideContent;
