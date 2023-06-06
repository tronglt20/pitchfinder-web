import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import { GetStoreAPI } from "../../Services/pitchService";
import { pitchActions } from "../../Store/pitch";
import { connect, useDispatch } from "react-redux";
import {
  Box,
  Dialog,
  DialogContent,
  TextField,
  Select,
  FormControl,
  MenuItem,
  Button,
} from "@mui/material";

const ProfilePopup = (props) => {
  useEffect(() => {
    var response = GetStoreAPI();
    response.then((data) => {
      props.setStoreState(data);
    });
  }, []);

  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleCloseDialog}
      PaperProps={{
        sx: {
          width: "591px",
          height: "598px",
          paddingX: "24px",
          paddingY: "36px",
        },
      }}
    >
      <DialogContent>
        <Typography
          sx={{
            fontSize: "32px",
            lineHeight: "130%",
            fontWeight: 700,
            marginBottom: "24px",
          }}
        >
          Store Profile
        </Typography>
        <Box>
          <TextField
            label="Name"
            value={props.store.name}
            fullWidth
            disabled
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            label="Address"
            value={props.store.address}
            fullWidth
            disabled
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            label="Phone Number"
            value={props.store.phoneNumber}
            fullWidth
            disabled
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            label="Opening Time"
            value={props.store.open}
            fullWidth
            disabled
            sx={{ marginBottom: "16px" }}
          />
          <TextField
            label="Closing Time"
            value={props.store.close}
            fullWidth
            disabled
          />
        </Box>
      </DialogContent>
    </Dialog>
  );
};

const mapStateToProps = (state) => {
  return {
    store: state.pitch.store,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setStoreState: (data) => dispatch(pitchActions.setStoreState(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePopup);
