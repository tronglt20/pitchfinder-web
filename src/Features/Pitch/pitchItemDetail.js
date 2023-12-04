import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PitchTypeEnums } from "../../enum";
import { toast } from "react-toastify";
import { UpdatePitchAPI } from "../../Services/pitchService";

const PitchItemDetail = ({ isOpen, onClose, item, image, reload }) => {
	const [isEditMode, setIsEditMode] = useState(false);
	const [editedPitch, setEditedPitch] = useState(item);

	const editMode = () => {
		setIsEditMode(!isEditMode);
	};

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setEditedPitch((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSave = async () => {
		try {
			const response = await UpdatePitchAPI(editedPitch);
			if (response.status === 200) {
				setIsEditMode(false);
				onClose();
				toast("Update success");
				reload();
			}
		} catch {
			toast("Update Fail");
		}
	};

	// const handleDelete = async (e) => {
	// 	console.log(item.id);
	// 	toast(editedPitch);
	// 	const response = await UpdateStoreAPI(editedPitch);
	// 	if (response.status === 200) {
	// 		setIsEditMode(false);
	// 		onClose();
	// 		toast("Update success");
	// 	}
	// };

	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative" onClose={onClose}>
				<div className="fixed inset-0 bg-black bg-opacity-25" />
				<div className="fixed inset-0 overflow-y-auto">
					<div className="flex min-h-full items-center justify-center p-4 text-center">
						<Dialog.Panel className="sm:ml-48 w-fit overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl ">
							<button className="absolute" onClick={onClose}>
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
								Pitch Detail
							</Dialog.Title>
							<div className="flex gap-5 my-5">
								<img
									src={image}
									alt="Paella dish"
									className="bg-gray-300 w-[300px] rounded-lg"
								/>
								<div className="flex flex-col gap-2">
									<div className="flex gap-1">
										<div className="text-label w-full flex flex-col gap-2">
											Description:
											{!isEditMode ? (
												<input
													disabled
													className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
													type="textarea"
													defaultValue={item?.description}
												/>
											) : (
												<input
													onChange={handleInputChange}
													name="description"
													className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
													type="textarea"
													defaultValue={editedPitch?.description}
												/>
											)}
										</div>
									</div>
									<div className="flex justify-between gap-2 mt-10px">
										<div className="flex flex-col gap-1 w-2/4">
											<p>Size:</p>
											{!isEditMode ? (
												<select
													disabled
													defaultValue={item?.type}
													name="type"
													className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
													required
												>
													{Object.keys(PitchTypeEnums).map((key) => (
														<option key={key} value={key}>
															{PitchTypeEnums[key]}
														</option>
													))}
												</select>
											) : (
												<select
													defaultValue={editedPitch?.type}
													name="type"
													onChange={handleInputChange}
													className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
													required
												>
													{Object.keys(PitchTypeEnums).map((key) => (
														<option key={key} value={key}>
															{PitchTypeEnums[key]}
														</option>
													))}
												</select>
											)}
										</div>
										<div className="flex gap-1 justify-end flex-col">
											<p className="text-label">Price(vnđ):</p>
											{!isEditMode ? (
												<>
													<input
														disabled
														className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
														type="number"
														defaultValue={item?.price}
													/>
												</>
											) : (
												<input
													className="w-full py-2 px-3 border rounded focus:outline-none focus:shadow-outline"
													onChange={handleInputChange}
													name="price"
													type="text"
													defaultValue={editedPitch.price}
												/>
											)}
										</div>
									</div>
									<div className="flex justify-end">
										<div className="flex gap-2 ">
											{isEditMode ? (
												<>
													{/* <button
														className="py-2 px-4 bg-primary text-white rounded-md hover:cursor-pointer hover:bg-red-500 flex gap-1"
														onClick={handleDelete}
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
																d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
															/>
														</svg>
													</button>
													*/}
													<button
														className="py-2 px-4 bg-primary text-white rounded-md hover:cursor-pointer hover:bg-secondary hover:text-primary flex gap-1"
														onClick={handleSave}
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
													</button>
													<button
														onClick={editMode}
														className="py-2 px-4 bg-primary text-white rounded-md hover:cursor-pointer hover:bg-secondary hover:text-primary flex gap-1"
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
													</button>
												</>
											) : (
												<button
													className="py-2 px-4 bg-primary text-white rounded-md hover:cursor-pointer hover:bg-secondary hover:text-primary flex gap-1"
													onClick={editMode}
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
															d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
														/>
													</svg>
												</button>
											)}
										</div>
									</div>
								</div>
							</div>
							<div>Lịch sử đặt sân ...</div>
							<div className="w-full bg-white p-6 space-y-4 rounded-lg"></div>
						</Dialog.Panel>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default PitchItemDetail;
