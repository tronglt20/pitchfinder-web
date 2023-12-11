import React from "react";

function CustomerItem({ customerItem }) {
	return (
		<tr key={customerItem.id} className="bg-white border border-white">
			<td className="py-2 px-4">{customerItem.id}</td>
			<td className="py-2 px-4">{customerItem.name}</td>
			<td className="py-2 px-4">
				{customerItem.phoneNumber !== null
					? customerItem.phoneNumber
					: "No Infomation"}
			</td>
			<td className="py-2 px-4">{customerItem.numberOfOrder}</td>
		</tr>
	);
}

export default CustomerItem;
