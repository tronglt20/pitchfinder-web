import React, { Fragment, useEffect, useState } from "react";
import { GetStoreAPI } from "../../Services/pitchService";
import { UpdateStoreAPI } from "../../Services/pitchService";
import { Dialog, Transition } from "@headlessui/react";
import { toast } from "react-toastify";

const ProfilePopup = ({ isOpen, onClose }) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [store, setStore] = useState({});
	const [editedStore, setEditedStore] = useState({});

	const getStoreData = async () => {
		const response = await GetStoreAPI();
		setStore(response.data);
		setEditedStore(response.data);
	};
	useEffect(() => {
		getStoreData();
	}, []);

	const handleEdit = () => {
		setIsEditMode(true);
	};

	const handleCancel = () => {
		setIsEditMode(false);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedStore((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSave = async (e) => {
		e.preventDefault();
		const response = await UpdateStoreAPI(editedStore);
		if (response.status === 200) {
			setIsEditMode(false);
			setStore(editedStore);
			onClose();
			toast("Update success");
		}
	};

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative" onClose={onClose}>
				<div className="fixed inset-0 bg-black bg-opacity-25" />
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Dialog.Panel className="w-full max-w-lg overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl ">
							<button onClick={onClose}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="h-6 w-6 text-red-500"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
							<Dialog.Title
								as="h3"
								className="text-2xl text-center font-medium leading-6 text-gray-900"
							>
								Profile
							</Dialog.Title>
							<div className="w-full bg-white p-6 space-y-4 rounded-lg">
								<form>
									<div className="mb-6">
										<label className="text-md font-semibold mb-2">
											<input
												disabled={!isEditMode}
												type="text"
												defaultValue={
													!isEditMode ? store.name : editedStore.name
												}
												onChange={handleInputChange}
												name="name"
												className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
											/>
										</label>
									</div>
									<div className="mb-6">
										<label className="text-md font-semibold mb-2">
											<input
												disabled={!isEditMode}
												type="text"
												defaultValue={
													!isEditMode ? store.address : editedStore.address
												}
												onChange={handleInputChange}
												name="address"
												className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
											/>
										</label>
									</div>
									<div className="mb-6">
										<label className="text-md font-semibold mb-2">
											<input
												disabled={!isEditMode}
												type="text"
												defaultValue={
													!isEditMode
														? store.phoneNumber
														: editedStore.phoneNumber
												}
												onChange={handleInputChange}
												name="phoneNumber"
												className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
											/>
										</label>
									</div>
									<div className="mb-6">
										<label className="text-md font-semibold mb-2">
											<input
												disabled={!isEditMode}
												type="text"
												defaultValue={
													!isEditMode ? store.open : editedStore.open
												}
												onChange={handleInputChange}
												name="open"
												className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
											/>
										</label>
									</div>
									<div className="mb-6">
										<label className="text-md font-semibold mb-2">
											<input
												disabled={!isEditMode}
												type="text"
												defaultValue={
													!isEditMode ? store.close : editedStore.close
												}
												onChange={handleInputChange}
												name="close"
												className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
											/>
										</label>
									</div>
									<div className="flex justify-end">
										{isEditMode ? (
											<div className="flex gap-2">
												<button
													type="submit"
													onClick={handleSave}
													className="px-4 py-2 bg-primary hover:bg-secondary text-white hover:text-primary rounded-md flex gap-1"
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
															d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
														/>
													</svg>
													Save
												</button>
												<div
													onClick={handleCancel}
													className="px-4 py-2 bg-primary hover:bg-secondary text-white hover:text-primary rounded-md flex hover:cursor-pointer gap-1"
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
															d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
														/>
													</svg>
													Cancel
												</div>
											</div>
										) : (
											<>
												<div
													className="px-4 py-2 bg-primary hover:bg-secondary text-white hover:text-primary rounded-md flex hover:cursor-pointer gap-1"
													onClick={handleEdit}
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
															d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
														/>
													</svg>
													Edit
												</div>
											</>
										)}
									</div>
								</form>
							</div>
						</Dialog.Panel>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default ProfilePopup;
