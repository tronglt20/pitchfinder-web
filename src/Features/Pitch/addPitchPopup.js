import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { AddPitchAPI } from "../../Services/pitchService";
import { PitchTypeEnums } from "../../enum";
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

const inputLabel = {
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 600,
  lineHeight: "16px",
  margin: 0,
  marginBottom: "8px",
};

function AddPitchPopup(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");
  const [attachment, setAttachment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    var response = AddPitchAPI(name, description, price, type);
    response.then((data) => {
      dispatch(pitchActions.addPitch({ name, description, price, type }));
      resetPopupInput();
      props.handleCloseDialog();
    });
  };

  const handleCancel = () => {
    resetPopupInput();
    props.handleCloseDialog();
  };

  const resetPopupInput = () => {
    setName("");
    setDescription("");
    setType("");
    setPrice("");
    setAttachment("");
  };

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
          Add New Pitch
        </Typography>
        <Box component="form" onSubmit={handleSubmit}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "24px",
            }}
          >
            <div>
              <p style={inputLabel}>Name</p>
              <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                margin="normal"
                required
                sx={{ width: "250px", margin: 0 }}
              />
            </div>
            <div>
              <p style={inputLabel}>Type</p>
              <FormControl
                sx={{ width: "250px", margin: 0 }}
                fullWidth
                margin="normal"
                required
              >
                <Select value={type} onChange={(e) => setType(e.target.value)}>
                  <MenuItem value={1}>{PitchTypeEnums[1]}</MenuItem>
                  <MenuItem value={2}>{PitchTypeEnums[2]}</MenuItem>
                  <MenuItem value={3}>{PitchTypeEnums[3]}</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>
          <Box sx={{ marginBottom: "24px" }}>
            <div>
              <p style={inputLabel}>Description</p>
              <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                fullWidth
                required
                multiline
                rows={3}
              />
            </div>
          </Box>
          <Box sx={{ marginBottom: "24px" }}>
            <div>
              <p style={inputLabel}>Price</p>
              <TextField
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                fullWidth
                required
              />
            </div>
          </Box>
          <Box sx={{ marginBottom: "24px" }}>
            <div>
              <p style={inputLabel}>Background</p>
              <TextField
                type="file"
                accept="image/*"
                onChange={(e) => setAttachment(e.target.files[0])}
                fullWidth
              />
            </div>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#303030",
                "&:hover": { backgroundColor: "#1a1a1a" },
                marginRight: "15px",
              }}
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}

export default connect()(AddPitchPopup);
