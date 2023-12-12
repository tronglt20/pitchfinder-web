import React, { useCallback, useState } from "react";
import Header from "../../Components/ContentItem/header";
import OrderTable from "./orderTable";
import { GetOrderAPI } from "../../Services/orderService";
import { useEffect } from "react";

export const Order = () => {
	const [responseData, setResponseData] = useState([]);
	const [searchParam, setSearchParam] = useState({
		keyName: "",
		pitchType: 0,
	});

	const handleSearchStringChange = (e) => {
		setSearchParam((prevState) => ({
			...prevState,
			keyName: e.target.value,
		}));
	};

	const handleTypeChange = (e) => {
		setSearchParam((prevState) => ({
			...prevState,
			pitchType: e.target.value,
		}));
	};

	const handleFilter = useCallback(() => {
		const searchParams = new URLSearchParams();
		switch (searchParam.pitchType) {
			case "0":
				break;
			case "1":
				searchParams.append("pitchType", 1);
				break;
			case "2":
				searchParams.append("pitchType", 2);
				break;
			case "3":
				searchParams.append("pitchType", 3);
				break;
			default:
				break;
		}
		if (searchParam.keyName !== "") {
			searchParams.append("keyName", searchParam.keyName);
		}
		return searchParams;
	}, [searchParam.pitchType, searchParam.keyName]);

	const getData = useCallback(async () => {
		try {
			const response = await GetOrderAPI(handleFilter());
			setResponseData(response.data);
		} catch (error) {
			console.log("Get Data from Order got error");
		}
	}, [handleFilter]);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<>
			<Header content="Order Management" />
			<div className="flex justify-between">
				<div className="flex">
					<input
						type="text"
						name="search"
						onChange={handleSearchStringChange}
						value={searchParam.keyName}
						placeholder="Search by name"
						className="rounded-md border border-transparent bg-white shadow-md px-4 py-2 focus:outline-none focus:border-primary
						transition duration-500 ease-in-out"
					/>
					<select
						name="type"
						onChange={handleTypeChange}
						value={searchParam.pitchType}
						className="rounded-md border border-transparent bg-white shadow-md px-4 py-2 focus:outline-none focus:border-primary
						transition duration-500 ease-in-out ml-2"
					>
						<option value="0">All</option>
						<option value="1">Size 5</option>
						<option value="2">Size 7</option>
						<option value="3">Size 11</option>
					</select>
				</div>
			</div>
			<OrderTable orderItem={responseData} />
		</>
	);
};
