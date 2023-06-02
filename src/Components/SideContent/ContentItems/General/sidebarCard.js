import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function SideBarCard(props) {
  return (
    <Card sx={{ background: "#cccccc", maxHeight: "65px" }}>
      <CardContent>
        <Typography gutterBottom component="div">
          600$
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Total Earning
        </Typography>
      </CardContent>
    </Card>
  );
}
