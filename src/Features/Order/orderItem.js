import React from "react";

export const OrderItem = ({ orderItem }) => {
	const formatCurrency = (value) => {
		return value.toLocaleString("it-IT", {
			style: "currency",
			currency: "VND",
		});
	};

	const formatUserName = (userName) => {
		return userName.split("@")[0];
	};

	return (
		<tr key={orderItem.orderId} className="bg-white border border-white">
			<td className="py-2 px-4">{orderItem.orderId}</td>
			<td className="py-2 px-4">{formatUserName(orderItem.createdByName)}</td>
			<td className="py-2 px-4">{formatCurrency(orderItem.price)}</td>
			<td className="py-2 px-4">
				{orderItem.start} - {orderItem.end}
			</td>
			<td className="py-2 px-4">{orderItem.pitchName}</td>
		</tr>
	);
};
