import React from "react";
import SideBar from "../Components/SideBar/sideBar";
import SideContent from "../Components/SideContent/sideContent";
import { Box, Stack } from "@mui/material";

function Container() {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack direction="row" alignItems="flex-start">
        <SideBar />
        <SideContent />
      </Stack>
    </Box>
  );
}

export default Container;
