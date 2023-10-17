import React from "react";
import SideBar from "../Components/SideBar/sideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignInPage from "../Features/SignInPage";

function Container() {
	var isAuth = useSelector((state) => state.auth.isAuthentication);
	return (
		<>
			{isAuth ? (
				<>
					<SideBar />
					<div className="sm:ml-64 bg-gray-50 min-h-screen">
						<div className="p-5">
							<Outlet />
						</div>
					</div>
				</>
			) : (
				<SignInPage />
			)}
		</>
	);
}

export default Container;
