import React, { useState, Fragment } from "react";
import { AddPitchAPI } from "../../Services/pitchService";
import { PitchTypeEnums } from "../../enum";
import { Dialog, Transition } from "@headlessui/react";
import { addPitch } from "../../Store/pitch";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";

function AddPitchPopup({ isOpen, onClose, reload }) {
	const dispatch = useDispatch();
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [type, setType] = useState(0);
	const [price, setPrice] = useState("");
	const [attachment, setAttachment] = useState("");

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await AddPitchAPI(
				name,
				description,
				price,
				Number(type)
			);
			console.log(response);
			if (response.status === 200) {
				dispatch(addPitch({ name, description, price, type }));
				toast.success("Add pitch successful!");
				resetPopupInput();
				reload();
				onClose();
			} else {
				toast.error("Error");
			}
		} catch {
			toast.error("Got Error at somewhere");
		}
	};

	const resetPopupInput = () => {
		setName("");
		setDescription("");
		setType("");
		setPrice("");
		setAttachment("");
	};

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative" onClose={onClose}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
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
									Add new Pitch
								</Dialog.Title>
								<div className="w-full bg-white p-6 space-y-4 rounded-lg">
									<form onSubmit={handleSubmit}>
										<div className="flex justify-between mb-6 gap-3">
											<div className="w-1/2">
												<label className="text-md font-semibold mb-2">
													Name
												</label>
												<input
													type="text"
													value={name}
													onChange={(e) => setName(e.target.value)}
													className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
													required
												/>
											</div>
											<div className="w-1/2">
												<label className="text-md font-semibold mb-2">
													Type
												</label>
												<select
													value={type}
													onChange={(e) => setType(e.target.value)}
													className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
													required
												>
													{Object.keys(PitchTypeEnums).map((key) => (
														<option key={key} value={key}>
															{PitchTypeEnums[key]}
														</option>
													))}
												</select>
											</div>
										</div>
										<div className="mb-6">
											<label className="text-md font-semibold mb-2">
												Description
											</label>
											<textarea
												value={description}
												onChange={(e) => setDescription(e.target.value)}
												className="w-full min-h-[80px] max-h-[300px] py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
												rows="3"
												required
											/>
										</div>
										<div className="mb-6">
											<label className="text-md font-semibold mb-2">
												Price
											</label>
											<input
												type="number"
												value={price}
												onChange={(e) => setPrice(e.target.value)}
												className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
												required
											/>
										</div>
										<div className="mb-6">
											<label className="text-md font-semibold mb-2">
												Background
											</label>
											<input
												type="file"
												accept="image/*"
												onChange={(e) => setAttachment(e.target.files[0])}
												className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
											/>
										</div>
										<div className="flex justify-end">
											<button
												type="button"
												onClick={resetPopupInput}
												className="px-4 py-2 bg-primary hover:bg-secondary text-white hover:text-primary rounded-md mr-4"
											>
												Reset
											</button>
											<button
												type="submit"
												className="px-4 py-2 bg-primary hover:bg-secondary text-white hover:text-primary rounded-md"
											>
												Submit
											</button>
										</div>
									</form>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

export default AddPitchPopup;
