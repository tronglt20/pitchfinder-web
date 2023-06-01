import * as React from "react";
import PitchItemDetail from "./pitchItemDetail";
import Card from "@mui/material/Card";
import { Box, Typography, CardMedia, CardContent } from "@mui/material";

export default function PitchItem(props) {
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
          cursor: "pointer",
          marginRight: 4,
        }}
        onClick={handleExpandClick}
      >
        <CardMedia
          component="img"
          height="80px"
          image="/static/images/cards/paella.jpg"
          alt="Paella dish"
          sx={{ padding: "20px", bgcolor: "#cccccc" }}
        />
        <CardContent>
          <Typography>
            <h4 style={{ margin: 0 }}>{props.name}</h4>
            <p style={{ margin: 0 }}>{props.description}</p>
            <hr />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                height: "30px",
              }}
            >
              <p>Loại: {props.type}</p>
              <p>Giá: {props.price}$</p>
            </Box>
          </Typography>
        </CardContent>
      </Card>
      <PitchItemDetail
        isOpen={expanded}
        handleCloseDialog={handleClose}
        {...props}
      />
    </>
  );
}
