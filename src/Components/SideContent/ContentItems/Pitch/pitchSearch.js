import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Box, Stack } from "@mui/material";
import { pitchActions } from "../../../../Store/pitch";
import { connect, useDispatch } from "react-redux";

function PitchSearch() {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    dispatch(pitchActions.getPitchsByFilter(value));
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Stack spacing={1} sx={{ width: 300 }}>
        <TextField
          label="Search"
          value={searchValue}
          onChange={handleSearchChange}
        />
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

export default connect()(PitchSearch);
