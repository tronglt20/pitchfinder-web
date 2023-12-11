import React, { useEffect, useCallback, useState } from "react";
import { OrderItem } from "./orderItem";
import { GetOrderAPI } from "../../Services/orderService";
// import image from "../../Assets/Images/no-data.png";

const OrderTable = () => {
	const [responseData, setResponseData] = useState([]);

	const getData = useCallback(async () => {
		try {
			const response = await GetOrderAPI();
			setResponseData(response.data);
		} catch (error) {
			console.log("Get Data from Order got error");
		}
	}, []);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<div className="mt-5 relative overflow-x-auto shadow-lg rounded-lg">
			{responseData.length > 0 ? (
				<table
					className="w-full text-md text-left  text-dark border border-dark"
					aria-label="Order Management"
				>
					<thead className="bg-secondary uppercase text-white">
						<tr>
							<th className="py-2 px-4">Id</th>
							<th className="py-2 px-4">Name</th>
							<th className="py-2 px-4">Phone Number</th>
							<th className="py-2 px-4">Number of order</th>
						</tr>
					</thead>
					<tbody>
						{responseData.map((item) => (
							<OrderItem key={item.id} orderItem={item} />
						))}
					</tbody>
				</table>
			) : (
				<div className="flex justify-center items-center">
					<p className="text-2xl">No data</p>
					{/* <img src={image} alt="" className=" w-20 h-20" /> */}
				</div>
			)}
		</div>
	);
};

export default OrderTable;
