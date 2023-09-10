import React, {useState} from "react";
import AddPitchPopup from "./addPitchPopup";
import Card from "@mui/material/Card";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export const AddButton = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const handleClose = () => {
    setExpanded(false);
  };

  return (
    <>
      <Card
        sx={{
          width: 300,
          marginBottom: "40px",
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          textAlign: "center",
          bgcolor: "#E2E7F0",
          font: "Inter",
          flexDirection: "column",
          cursor: "pointer",
          marginRight: 4,
          height: "260px",
        }}
        onClick={handleExpandClick}
      >
        <AddCircleOutlineIcon />
        <p>Add New</p>
      </Card>
      <AddPitchPopup isOpen={expanded} handleCloseDialog={handleClose} />
    </>
  );
}
