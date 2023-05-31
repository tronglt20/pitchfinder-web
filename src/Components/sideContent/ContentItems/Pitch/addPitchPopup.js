import React from "react";
import Typography from "@mui/material/Typography";
import { Dialog, DialogContent } from "@mui/material";

function AddPitchPopup(props) {
  return (
    <Dialog
      open={props.isOpen}
      onClose={props.handleCloseDialog}
      PaperProps={{
        sx: {
          width: "591px",
          height: "598px",
        },
      }}
    >
      <DialogContent>
        <Typography variant="h6">Fullscreen Popup</Typography>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

export default AddPitchPopup;
