import React from "react";
import {
  Paper,
  Table,
  TableHead,
  TableContainer,
  TableBody,
} from "@mui/material";
import OrderItem from "./orderItem";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "#001",
    "ldjhfalksdjhfaksjhflkjsahd",
    "ldjhfalksdjhfaksjhflkjsahd",
    67,
    4.0
  ),
  createData("#001", 237, 9.0, 37, 4.3),
  createData("#001", 262, 16.0, 24, 6.0),
  createData("#001", 305, 3.7, 67, 4.3),
  createData("#001", 356, 16.0, 49, 3.9),
];

function OrderTable() {
  return (
    <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <OrderItem
            orderId="Mã đơn"
            customer="Khách hàng"
            date="Ngày"
            times="Khung giờ"
            pitch="Sân"
          />
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <OrderItem
              orderId={row.name}
              customer={row.calories}
              date={row.fat}
              times={row.carbs}
              pitch={row.protein}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default OrderTable;
