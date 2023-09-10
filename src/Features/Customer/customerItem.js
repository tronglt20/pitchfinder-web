import React from "react";
import { TableRow, TableCell } from "@mui/material";

function CustomerItem(props) {
  return (
    <TableRow key={props.key}>
      <TableCell sx={{ width: "100px" }} align="left">
        {props.index}
      </TableCell>
      <TableCell sx={{ width: "250px" }} align="left">
        {props.name}
      </TableCell>
      <TableCell sx={{ width: "250px" }} align="left">
        {props.phoneNumber}
      </TableCell>
      <TableCell sx={{ width: "150px" }} align="left">
        {props.numberOfOrder}
      </TableCell>
    </TableRow>
  );
}

export default CustomerItem;
