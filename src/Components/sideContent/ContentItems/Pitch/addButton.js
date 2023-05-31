import * as React from "react";
import AddPitchPopup from "./addPitchPopup";
import Card from "@mui/material/Card";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function AddButton() {
  const [expanded, setExpanded] = React.useState(false);

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
        }}
        onClick={handleExpandClick}
      >
        <AddCircleOutlineIcon />
        <p>
          Thêm thông tin <br /> sân mới
        </p>
      </Card>
      <AddPitchPopup isOpen={expanded} handleCloseDialog={handleClose} />
    </>
  );
}
