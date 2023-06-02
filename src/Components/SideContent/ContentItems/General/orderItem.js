import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";

export default function OrderItem(props) {
  return (
    <Card sx={{ margin: "14px" }}>
      <CardMedia
        sx={{}}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Order #001
        </Typography>
      </CardContent>
    </Card>
  );
}
