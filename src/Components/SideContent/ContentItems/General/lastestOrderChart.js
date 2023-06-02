import * as React from "react";
import Card from "@mui/material/Card";
import OrderItem from "./orderItem";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function LastestOrderChart(props) {
  return (
    <Card sx={{ background: "#cccccc", height: "400px", padding: "24px" }}>
      <CardContent>
        <Typography
          sx={{ textAlign: "center" }}
          gutterBottom
          variant="h5"
          component="div"
        >
          Lastest Orders
        </Typography>
        <OrderItem />
        <OrderItem />
        <OrderItem />
      </CardContent>
    </Card>
  );
}
