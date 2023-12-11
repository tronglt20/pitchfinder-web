import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { logout, setCurrentUser } from "../../Store/auth";
import { useDispatch } from "react-redux";
import ProfilePopup from "./profilePopup";
import { GetCurrentUserAPI } from "../../Services/iamService";

const AvatarMenu = (props) => {
	const [user, setUser] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const dispatch = useDispatch();

	const getData = async () => {
		const response = await GetCurrentUserAPI();
		setUser(response.data);
		dispatch(setCurrentUser(user));
	};

	useEffect(() => {
		getData();
	}, []);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const logoutHandler = () => {
		dispatch(logout());
		localStorage.clear();
	};

	return (
		<>
			<Menu
				as="div"
				className="relative inline-block h-fit text-left w-full rounded shadow-lg"
			>
				<Menu.Button className="bg-primary flex w-full h-12 shadow-xl z-10 text-white rounded-md hover:bg-primary">
					<img
						className="w-10 h-10 rounded-full my-auto ml-1"
						alt="Cindy Baker"
						src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
					/>
					<p className="mx-2 m-auto">
						{user.name ? user.name : "user@gmail.com"}
					</p>
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
										onClick={openModal}
										className={`${
											active ? "bg-primary text-white" : "text-gray-900"
										} group flex gap-2 w-full items-center rounded px-2 py-2 text-sm`}
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
												d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
											/>
										</svg>
										Profile
									</button>
								)}
							</Menu.Item>
							<Menu.Item>
								{({ active }) => (
									<div
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
										Log out
									</div>
								)}
							</Menu.Item>
						</div>
					</Menu.Items>
				</Transition>
			</Menu>
			<ProfilePopup isOpen={isOpen} onClose={closeModal} user={user} />
		</>
	);
};

export default AvatarMenu;
