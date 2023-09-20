import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../Store/auth";
import ProfilePopup from "./profilePopup";
import { GetCurrentUserAPI } from "../../Services/iamService";

const AvatarMenu = (props) => {
	// useEffect(() => {
	// 	var response = GetCurrentUserAPI();
	// 	response.then((data) => {
	// 		props.setCurrentUser(data);
	// 	});
	// }, []);

	const [profileExpanded, setProfileExpanded] = useState(false);

	const handleExpandClick = () => {
		setAnchorEl(null);
		setProfileExpanded(!profileExpanded);
	};

	const logoutHandler = () => {
		props.logout();
	};

	const [anchorEl, setAnchorEl] = useState(null);
	const handleClick = (event) => {
		setAnchorEl(anchorEl ? null : event.currentTarget);
	};
	const handleClose = () => {
		setProfileExpanded(false);
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);

	return (
		// <div className="flex items-center p-8">
		//   <div className="space-x-2">
		//     <img
		//       className="w-10 h-10 rounded-full"
		//       alt="Cindy Baker"
		//       src="/static/images/avatar/3.jpg"
		//     />
		//   </div>
		//   <div>
		//     <button
		//       id="composition-button"
		//       onClick={handleClick}
		//       className="text-blue-500 hover:underline"
		//     >
		//       {props.user.email}
		//     </button>
		//     {open && (
		//       <div className="relative">
		//         <div className="absolute right-0 top-0">
		//           <div className="flex flex-col">
		//             <button
		//               className="p-3"
		//               onClick={handleExpandClick}
		//             >
		//               Store Profile
		//             </button>
		//             <button
		//               className="p-3"
		//               onClick={logoutHandler}
		//             >
		//               Logout
		//             </button>
		//           </div>
		//         </div>
		//       </div>
		//     )}
		//   </div>
		//   <ProfilePopup isOpen={profileExpanded} handleCloseDialog={handleClose} />
		// </div>
		<Menu
			as="div"
			className="relative inline-block h-fit text-left w-full rounded shadow-lg"
		>
			<Menu.Button className="bg-primary flex w-full h-12 shadow-xl z-10 text-white rounded-md hover:bg-primary ">
				{/* {user.name} */}
				<img
					className="w-10 h-10 rounded-full my-auto ml-1"
					alt="Cindy Baker"
					src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
				/>
				<p className="mx-2 m-auto">Tuns ne</p>
			</Menu.Button>
			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute bottom-16 w-full mt-2 origin-top-right rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="px-1 py-1">
						<Menu.Item>
							{({ active }) => (
								<button
									className={`${
										active ? "bg-primary text-white" : "text-gray-900"
									} group flex gap-2 w-full items-center rounded px-2 py-2 text-sm`}
									onClick={logoutHandler}
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
										/>
									</svg>
									Đăng xuất
								</button>
							)}
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.auth.user,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		setCurrentUser: (data) => dispatch(authActions.setCurrentUser(data)),
		logout: () => dispatch(authActions.logout()),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(AvatarMenu);
