import React, { useEffect, useState, useCallback } from "react";
import CustomerItem from "./customerItem";
import { GetCustomerAPI } from "../../Services/customerService";
import image from "../../Assets/empty_product_banner.c076afe7.png";

const CustomerTable = () => {
	const [responseData, setResponseData] = useState([]);

	const getData = useCallback(async () => {
		try {
			const response = await GetCustomerAPI();
			setResponseData(response.data);
		} catch (error) {
			console.log("Get Data from Customer got error");
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
					aria-label="Customer Management"
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
							<CustomerItem key={item.id} customerItem={item} />
						))}
					</tbody>
				</table>
			) : (
				<div className="flex flex-col h-[78vh] p-10 justify-center items-center ">
					<img src={image} alt="" className="w-[400px] h-[400px]" />
					<p className="text-2xl text-red-400 font-bold">No customer :(</p>
				</div>
			)}
		</div>
	);
};

export default CustomerTable;
