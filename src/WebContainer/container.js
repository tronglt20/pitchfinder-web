import React from "react";
import SideBar from "../Components/SideBar/sideBar";
import SideContent from "../Components/SideContent/sideContent";
import SignInPage from "../Components/SignInPage/signInPage";
import { Box, Stack } from "@mui/material";
import { useSelector } from "react-redux";

function Container() {
  var isAuth = useSelector((state) => state.auth.isAuthentication);
  return (
    <Box sx={{ width: "100%" }}>
      {isAuth ? (
        <Stack direction="row" alignItems="flex-start">
          <SideBar />
          <SideContent />
        </Stack>
      ) : (
        <SignInPage />
      )}
    </Box>
  );
}

export default Container;
