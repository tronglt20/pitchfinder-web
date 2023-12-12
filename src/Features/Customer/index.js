import React, { useCallback, useState } from "react";
import CustomerTable from "./customerTable";
import Header from "../../Components/ContentItem/header";
import { GetCustomerAPI } from "../../Services/customerService";
import { useEffect } from "react";

export const Customer = () => {
	const [responseData, setResponseData] = useState([]);
	const [searchString, setSearchString] = useState("");

	const handleSearchStringChange = (e) => {
		setSearchString(e.target.value);
	};

	const handleFilter = useCallback(() => {
		const searchParams = new URLSearchParams();
		if (searchString !== "") {
			searchParams.append("keyName", searchString);
		}
		return searchParams;
	}, [searchString]);

	const getData = useCallback(async () => {
		try {
			const response = await GetCustomerAPI(handleFilter());
			setResponseData(response.data);
		} catch (error) {
			console.log("Get Data from Customer got error");
		}
	}, [handleFilter]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<>
			<Header content="Customer Management" />
			<div className="flex justify-between">
				<div className="flex">
					<input
						type="text"
						name="search"
						onChange={handleSearchStringChange}
						value={searchString}
						placeholder="Search by name"
						className="rounded-md border border-transparent bg-white shadow-md px-4 py-2 focus:outline-none focus:border-primary
						transition duration-500 ease-in-out"
					/>
				</div>
			</div>
			<CustomerTable customerItem={responseData} />
		</>
	);
};
