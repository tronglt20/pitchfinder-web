import React from "react";
import SideBar from "../Components/SideBar/sideBar";
import SideContent from "../Components/SideContent/sideContent";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";

function Container() {
  var isAuth = useSelector((state) => state.auth.isAuthentication);
  console.log(isAuth);
  return (
    <Box sx={{ width: "100%" }}>
      {isAuth && (
        <Stack direction="row" alignItems="flex-start">
          <SideBar />
          <SideContent />
        </Stack>
      )}
    </Box>
  );
}

export default Container;
