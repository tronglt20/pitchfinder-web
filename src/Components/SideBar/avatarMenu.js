import React, { useEffect } from "react";
import {
  Box,
  Stack,
  Avatar,
  Popper,
  Paper,
  ClickAwayListener,
  Button,
} from "@mui/material";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/auth";
import ProfilePopup from "./profilePopup";
import { GetCurrentUserAPI } from "../../Services/iamService";

const AvatarMenu = (props) => {
  useEffect(() => {
    var response = GetCurrentUserAPI();
    response.then((data) => {
      props.setCurrentUser(data);
    });
  }, []);

  const [profileExpanded, setProfileExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setAnchorEl(null);
    setProfileExpanded(!profileExpanded);
  };

  const logoutHandler = () => {
    props.logout();
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  const handleClose = () => {
    setProfileExpanded(false);
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
          {props.user.email}
        </Button>
        <Popper open={open} anchorEl={anchorEl} placement="bottom-end">
          <ClickAwayListener onClickAway={handleClose}>
            <Paper sx={{ display: "flex", flexDirection: "column" }}>
              <Button sx={{ p: "12px 20px" }} onClick={handleExpandClick}>
                Store Profile
              </Button>
              <Button sx={{ p: "12px 20px" }} onClick={logoutHandler}>
                Logout
              </Button>
            </Paper>
          </ClickAwayListener>
        </Popper>
      </div>

      <ProfilePopup isOpen={profileExpanded} handleCloseDialog={handleClose} />
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (data) => dispatch(authActions.setCurrentUser(data)),
    logout: () => dispatch(authActions.logout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarMenu);
