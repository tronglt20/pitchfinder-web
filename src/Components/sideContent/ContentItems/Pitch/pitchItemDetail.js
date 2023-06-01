import React from "react";
import {
  Box,
  Dialog,
  DialogContent,
  CardMedia,
  Typography,
} from "@mui/material";

const label = {
  fontFamily: "Inter",
  fontSize: "14px",
  fontWeight: 600,
  margin: 0,
  marginBottom: "8px",
  color: "#717D96",
};

const button = {
  color: "#2D3648",
  width: "109px",
  height: "40px",
  backgroundColor: "#EDF0F7",
  alignItems: "center",
  display: "flex",
  justifyContent: "center",
  padding: "4px 8px",
  borderRadius: "6px",
  cursor: "pointer",
  marginLeft: "10px",
};

function PitchItemDetail(props) {
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
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image="/static/images/cards/paella.jpg"
            alt="Paella dish"
            sx={{
              padding: "20px",
              bgcolor: "#cccccc",
              width: "148px",
              height: "148px",
            }}
          />
          <Box sx={{ flex: 1, marginX: "30px" }}>
            <Typography
              sx={{
                fontSize: "32px",
                lineHeight: "130%",
                fontWeight: 700,
                marginBottom: "24px",
              }}
            >
              {props.name}
            </Typography>
            <p style={label}>Mô tả</p>
            <p>{props.description}</p>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p style={label}>Loại:</p> {props.type}
              </div>
              <div>
                <p style={label}>Giá:</p> {props.price}
              </div>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: 1,
            borderBottom: 1,
            borderTopColor: "#EDF0F7",
            borderBottomColor: "#EDF0F7",
            marginY: "24px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Thao tác
          </Box>
          <Box sx={{ display: "flex" }}>
            <p style={button}>Tuỳ chỉnh</p>
            <p style={button}>Xoá</p>
          </Box>
        </Box>
        <Box>Lịch sử đặt sân ...</Box>
      </DialogContent>
    </Dialog>
  );
}

export default PitchItemDetail;
