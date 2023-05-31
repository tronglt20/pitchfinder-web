import React from "react";
import { Route, Routes } from "react-router-dom";
import General from "./ContentItems/General/general";
import Order from "./ContentItems/Order/order";
import Pitch from "./ContentItems/Pitch/pitch";
import Customer from "./ContentItems/Customer/customer";
import { Box, Stack } from "@mui/material";

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
        <Route path="/general" element={<General />} />
        <Route path="/order" element={<Order />} />
        <Route path="/pitch" element={<Pitch />} />
        <Route path="/customer" element={<Customer />} />
      </Routes>
    </Box>
  );
}

export default SideContent;
