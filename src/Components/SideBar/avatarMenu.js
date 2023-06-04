import React from "react";
import {
  Box,
  Stack,
  Avatar,
  Popper,
  Paper,
  ClickAwayListener,
  Button,
} from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Store";

function AvatarMenu() {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuthentication);
  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <Box sx={{ display: "flex", alignItems: "center", padding: "32px 24px" }}>
      <Stack direction="row" spacing={2}>
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </Stack>
      <div>
        <Button id="composition-button" onClick={handleClick}>
          tronglt2001@gmail.com
        </Button>
        <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
          <ClickAwayListener onClickAway={handleClose}>
            <Paper sx={{ display: "flex", flexDirection: "column" }}>
              <Button sx={{ p: "12px 52px" }}>Profile</Button>
              <Button sx={{ p: "12px 52px" }} onClick={logoutHandler}>
                Logout
              </Button>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </div>
    </Box>
  );
}

export default AvatarMenu;
