import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Order, Pitch, General, Customer, SignInPage } from "../Features";
import Container from "./../WebContainer/container";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Container />}>
				<>
					<Route path="/dashboard" element={<General />} />
					<Route path="/order" element={<Order />} />
					<Route path="/pitch" element={<Pitch />} />
					<Route path="/customer" element={<Customer />} />
					<Route path="/login" element={<SignInPage />} />
				</>
			</Route>
		</Routes>
	);
};

export default AppRouter;
