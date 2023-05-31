import React from "react";
import { TableRow, TableCell } from "@mui/material";

function OrderItem(props) {
  return (
    <TableRow key={props.key}>
      <TableCell sx={{ width: "100px" }} align="left">
        {props.orderId}
      </TableCell>
      <TableCell sx={{ width: "250px" }} align="left">
        {props.customer}
      </TableCell>
      <TableCell sx={{ width: "250px" }} align="left">
        {props.date}
      </TableCell>
      <TableCell sx={{ width: "150px" }} align="left">
        {props.times}
      </TableCell>
      <TableCell sx={{ width: "150px" }} align="left">
        {props.pitch}
      </TableCell>
    </TableRow>
  );
}

export default OrderItem;
