import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableContainer,
  TableBody,
} from "@mui/material";
import CustomerItem from "./customerItem";

function createData(index, name, phoneNumber, numberOfOrder) {
  return { index, name, phoneNumber, numberOfOrder };
}

const rows = [
  createData("#001", "Le Tan Trong", 67, 4.0),
  createData("#001", 237, 9.0, 37, 4.3),
  createData("#001", 262, 16.0, 24, 6.0),
  createData("#001", 305, 3.7, 67, 4.3),
  createData("#001", 356, 16.0, 49, 3.9),
];

function CustomerTable() {
  return (
    <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <CustomerItem
            index="Index"
            name="Name"
            phoneNumber="Phone number"
            numberOfOrder="Number of order"
          />
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <CustomerItem
              index={row.index}
              name={row.name}
              phoneNumber={row.phoneNumber}
              numberOfOrder={row.numberOfOrder}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CustomerTable;
