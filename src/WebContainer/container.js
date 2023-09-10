import React from "react";
import SideBar from "../Components/SideBar/sideBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import SignInPage from '../Features/SignInPage/signInPage';

function Container() {
	var isAuth = useSelector((state) => state.auth.isAuthentication);
	return (
		<>
			{/* {isAuth ? ( */}
				<>
					<SideBar />
					<div className="ml-64">
						<Outlet/>
					</div>
				</>
				{/* ) : (
					<SignInPage />
				)} */}
		</>
	);
}

export default Container;
