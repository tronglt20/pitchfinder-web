import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function RevenueCard(props) {
  return (
    <Card sx={{ background: "#cccccc" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          600$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Earning
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
