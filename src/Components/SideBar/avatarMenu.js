import React, { useEffect } from "react";
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
    <div className="flex items-center p-8">
      <div className="space-x-2">
        <img
          className="w-10 h-10 rounded-full"
          alt="Cindy Baker"
          src="/static/images/avatar/3.jpg"
        />
      </div>
      <div>
        <button
          id="composition-button"
          onClick={handleClick}
          className="text-blue-500 hover:underline"
        >
          {props.user.email}
        </button>
        {open && (
          <div className="relative">
            <div className="absolute right-0 top-0">
              <div className="flex flex-col">
                <button
                  className="p-3"
                  onClick={handleExpandClick}
                >
                  Store Profile
                </button>
                <button
                  className="p-3"
                  onClick={logoutHandler}
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <ProfilePopup isOpen={profileExpanded} handleCloseDialog={handleClose} />
    </div>
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
