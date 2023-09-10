import React, { useEffect } from "react";
import CustomerItem from "./customerItem";
import { connect } from "react-redux";
import { GetCustomerAPI } from "../../Services/orderService";
import { orderActions } from "../../Store/order";

import {
  Paper,
  Table,
  TableHead,
  TableContainer,
  TableBody,
} from "@mui/material";

const CustomerTable = (props) => {
  useEffect(() => {
    var response = GetCustomerAPI();
    response.then((data) => {
      props.setCustomerState(data);
    });
  }, []);

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
          {props.customers.map((row) => (
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
};

const mapStateToProps = (state) => {
  return {
    customers: state.order.customers,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCustomerState: (data) => dispatch(orderActions.setCustomerState(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CustomerTable);
