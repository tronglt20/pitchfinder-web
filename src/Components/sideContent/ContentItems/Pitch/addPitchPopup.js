import React from "react";
import Typography from "@mui/material/Typography";
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
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [type, setType] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [attachment, setAttachment] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      description,
      type,
      price,
      attachment,
    });
    // Reset the form fields
    setName("");
    setDescription("");
    setType("");
    setPrice("");
    setAttachment("");
  };

  const handleCancel = () => {
    setName("");
    setDescription("");
    setType("");
    setPrice("");
    setAttachment("");
    props.handleCloseDialog();
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
                  <MenuItem value={5}>Sân 5</MenuItem>
                  <MenuItem value={7}>Sân 7</MenuItem>
                  <MenuItem value={11}>Sân 11</MenuItem>
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
                required
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
export default AddPitchPopup;
