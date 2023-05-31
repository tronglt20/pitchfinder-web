import React from "react";
import Header from "../../ContentItemMaterials/header";
import PitchSearch from "./pitchSearch";
import PitchItem from "./pitchItem";
import { Box } from "@mui/material";

function Pitch() {
  return (
    <Box>
      <Header content="Quản lý Sân bóng" />
      <PitchSearch />
      <Box sx={{ marginTop: "30px" }}>
        <PitchItem />
      </Box>
    </Box>
  );
}

export default Pitch;
