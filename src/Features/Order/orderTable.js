import React, { useEffect } from "react";
import { OrderItem } from "./orderItem";
import { orderActions } from "../../Store/order";
import { connect } from "react-redux";
import { GetOrderAPI } from "../../Services/orderService";

const OrderTable = (props) => {
  // useEffect(() => {
  //   var response = GetOrderAPI();
  //   response.then((data) => {
  //     props.setOrderState(data);
  //   });
  // }, []);

  return (
    <div className="mt-5 relative overflow-x-auto shadow-lg rounded-lg">
      <table 
        className="w-full text-md text-left  text-dark border border-dark " 
        aria-label="Order Management">
        <thead className="bg-secondary uppercase text-white ">
          <tr>
            <th className="py-2 px-4">Id</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Duration</th>
            <th className="py-2 px-4">Pitch</th>
          </tr>
        </thead>
        <tbody>
          {/* {props.orders.map((item) => (
            <OrderItem
              orderId={item.orderId}
              customer={item.createdByName}
              customerId={item.createdById}
              date={item.date}
              times={item.open - item.close}
              pitch={item.pitchName}
              pitchId={item.pitchId}
            />
          ))} */}
          <tr className="bg-white border border-white">
            <td className="py-2 px-4">1</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
          </tr>
          <tr className="bg-white border border-white ">
            <td className="py-2 px-4">2</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
            <td className="py-2 px-4">Test</td>
          </tr>
          <tr className="bg-white border border-white">
            <td className="py-2 px-4">3</td>
            <td className="py-2 px-4">Test</td>
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
    orders: state.order.orders,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setOrderState: (data) => dispatch(orderActions.setOrderState(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderTable);
