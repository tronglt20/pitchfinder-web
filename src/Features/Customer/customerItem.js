import React from "react";

function CustomerItem(props) {
  return (
    <tr key={props.index} className="bg-white border border-white">
      <td className="py-2 px-4">{props.index}</td>
      <td className="py-2 px-4">{props.name}</td>
      <td className="py-2 px-4">{props.phoneNumber}</td>
      <td className="py-2 px-4">{props.numberOfOrder}</td>
    </tr>
  );
}

export default CustomerItem;
