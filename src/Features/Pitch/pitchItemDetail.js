import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

export const PitchItemDetail = ({ isOpen, onClose, itemData }) => {
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
								Pitch Detail
							</Dialog.Title>
							<div className="my-5">
								<img
									src="https://res-1.cloudinary.com/gll/image/upload/c_fit,f_auto,h_330,w_750/v1680515328/dacpbxqimhxybqtsdecb.jpg"
									alt="Paella dish"
									className="bg-gray-300 rounded-lg"
								/>
							</div>
							<div className="flex gap-1">
								<p className="text-label">Description:</p>{" "}
								{itemData.description}
							</div>
							<div className="flex justify-between mt-10px">
								<div className="flex gap-1">
									<p className="text-label">Type:</p> {itemData.type}
								</div>
								<div className="flex gap-1">
									<p className="text-label">Price:</p> {itemData.price} vnđ
								</div>
							</div>

							<div className="flex justify-between border-t border-b border-gray-300 my-24px py-2">
								<div className="flex items-center text-20px font-semibold">
									Operation
								</div>
								<div className="flex gap-2 ">
									<button className="py-2 px-4 bg-primary text-white rounded-md">
										Edit
									</button>
									<button className="py-2 px-4 bg-primary text-white rounded-md">
										Delete
									</button>
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
