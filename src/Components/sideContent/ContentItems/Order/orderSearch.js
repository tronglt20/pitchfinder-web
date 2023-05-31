import React from "react";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Stack } from "@mui/material";

function OrderSearch() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack spacing={2} sx={{ width: 300 }}>
        <TextField label="Tìm kiếm" />
      </Stack>
      <FilterAltIcon sx={filterIconStyles} />
    </Box>
  );
}

const filterIconStyles = {
  height: "30px",
  width: "30px",
  borderRadius: "6px",
  padding: "12px",
  bgcolor: "#EDF0F7",
  marginLeft: "10px",
};

export default OrderSearch;
