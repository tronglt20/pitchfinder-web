import React, { useEffect } from "react";
import OrderItem from "./orderItem";
import { orderActions } from "../../Store/order";
import { connect } from "react-redux";
import { GetOrderAPI } from "../../Services/orderService";

import {
  Paper,
  Table,
  TableHead,
  TableContainer,
  TableBody,
} from "@mui/material";

const OrderTable = (props) => {
  useEffect(() => {
    var response = GetOrderAPI();
    response.then((data) => {
      props.setOrderState(data);
    });
  }, []);

  return (
    <TableContainer sx={{ marginTop: "30px" }} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <OrderItem
            orderId="Id"
            customer="Name"
            date="Date"
            times="Duration"
            pitch="Pitch"
          />
        </TableHead>
        <TableBody>
          {props.orders.map((item) => (
            <OrderItem
              orderId={item.orderId}
              customer={item.createdByName}
              customerId={item.createdById}
              date={item.date}
              times={item.open - item.close}
              pitch={item.pitchName}
              pitchId={item.pitchId}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrderState: (data) => dispatch(orderActions.setOrderState(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
