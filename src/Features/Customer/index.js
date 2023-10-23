import React from "react";
import { CustomerSearch } from "./customerSearch";
import CustomerTable from "./customerTable";
import Header from "../../Components/ContentItem/header";

export const Customer = () => {
	return (
		<>
			<Header content="Customer Management" />
			<CustomerSearch />
			<CustomerTable />
		</>
	);
};
