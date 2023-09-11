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
  // useEffect(() => {
  //   var response = GetCustomerAPI();
  //   response.then((data) => {
  //     props.setCustomerState(data);
  //   });
  // }, []);

  return (
    <div className="mt-5 relative overflow-x-auto shadow-lg rounded-lg">
      <table className="w-full text-md text-left  text-dark border border-dark" aria-label="Order Management">
        <thead className="bg-secondary uppercase text-white">
          <tr>
            <th className="py-2 px-4">Id</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Phone Number</th>
            <th className="py-2 px-4">Number of order</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.customers.map((item) => (
            <CustomerItem
              index={item.index}
              name={item.name}
              phoneNumber={item.phoneNumber}
              numberOfOrder={item.numberOfOrder}
            />
          ))} */}
          <tr className="bg-white border border-white">
            <td className="py-2 px-4">1</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
          </tr>
          <tr className="bg-white border border-white">
            <td className="py-2 px-4">2</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
          </tr>
          <tr className="bg-white border border-white">
            <td className="py-2 px-4">3</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
          </tr>
        </tbody>
      </table>
    </div>   

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
