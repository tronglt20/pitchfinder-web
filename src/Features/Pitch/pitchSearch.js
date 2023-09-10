import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Box, Stack } from "@mui/material";
import { pitchActions } from "../../Store/pitch";
import { connect, useDispatch } from "react-redux";
import { PitchTypeEnums } from "../../enum";

const PitchSearch = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchValue(value);
    dispatch(pitchActions.getPitchsByFilter({ search: value }));
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleFilterOption = (option) => {
    dispatch(pitchActions.getPitchsByFilter({ type: option }));
    handleMenuClose();
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
      <IconButton
        aria-label="Filter"
        onClick={handleMenuOpen}
        sx={filterIconStyles}
      >
        <FilterAltIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => handleFilterOption()}>Reset</MenuItem>
        <MenuItem onClick={() => handleFilterOption(1)}>
          {PitchTypeEnums[1]}
        </MenuItem>
        <MenuItem onClick={() => handleFilterOption(2)}>
          {PitchTypeEnums[2]}
        </MenuItem>
        <MenuItem onClick={() => handleFilterOption(3)}>
          {PitchTypeEnums[3]}
        </MenuItem>
      </Menu>
    </Box>
  );
}

const filterIconStyles = {
  height: "20px",
  width: "20px",
  borderRadius: "6px",
  padding: "24px",
  bgcolor: "#EDF0F7",
  marginLeft: "10px",
};

export default connect()(PitchSearch);
