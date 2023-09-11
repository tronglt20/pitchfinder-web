import React from "react";

export const OrderItem = (props) => {
  return (
    <tr key={props.orderId} className="bg-white border border-white">
      <td className="py-2 px-4">{props.orderId}</td>
      <td className="py-2 px-4">{props.createdByName}</td>
      <td className="py-2 px-4">{props.date}</td>
      <td className="py-2 px-4">{props.open - props.close}</td>
      <td className="py-2 px-4">{props.pitchName}</td>
    </tr>
  );
}
