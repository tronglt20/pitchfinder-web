import React from "react";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Stack } from "@mui/material";

function CustomerSearch() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack spacing={1} sx={{ width: 300 }}>
        <TextField label="Search" />
      </Stack>
      <FilterAltIcon sx={filterIconStyles} />
    </Box>
  );
}

const filterIconStyles = {
  height: "20px",
  width: "20px",
  borderRadius: "6px",
  padding: "12px",
  bgcolor: "#EDF0F7",
  marginLeft: "10px",
};

export default CustomerSearch;
