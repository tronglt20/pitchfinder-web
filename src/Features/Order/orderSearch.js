import React, { useState, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

const selection = [
	{ name: "Filter" },
	{ name: "Name" },
	{ name: "Date" },
	{ name: "Duration" },
	{ name: "Pitch" },
];

export const OrderSearch = () => {
	const [selected, setSelected] = useState(selection[0]);

	return (
		<div className="flex items-start">
			<div className="sm:w-80 w-full">
				<input
					type="text"
					placeholder="Search"
					className="w-full sm:text-md py-3 px-3 rounded-lg shadow-md"
				/>
			</div>
			<div className="w-36 h-10 ml-2">
				<Listbox value={selected} onChange={setSelected}>
					<div className="relative">
						<Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left shadow-md sm:text-md">
							<span className="block font-medium opacity-75 truncate">
								{selected.name}
							</span>
							<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
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
										d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
									/>
								</svg>
							</span>
						</Listbox.Button>
						<Transition
							as={Fragment}
							leave="transition ease-in duration-100"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
								{selection.map((select, index) => (
									<Listbox.Option
										key={index}
										className={({ active }) =>
											`relative cursor-default select-none py-2 pl-10 pr-4 ${
												active ? "bg-primary text-white" : "text-gray-900"
											}`
										}
										value={select}
									>
										{({ selected }) => (
											<>
												<span
													className={`block truncate ${
														selected ? "font-medium" : "font-normal"
													}`}
												>
													{select.name}
												</span>
												{selected ? (
													<span className="absolute inset-y-0 left-0 flex items-center pl-3 text-secondary">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															fill="none"
															viewBox="0 0 24 24"
															stroke-width="1.5"
															stroke="currentColor"
															class="w-6 h-6"
														>
															<path
																stroke-linecap="round"
																stroke-linejoin="round"
																d="M4.5 12.75l6 6 9-13.5"
															/>
														</svg>
													</span>
												) : null}
											</>
										)}
									</Listbox.Option>
								))}
							</Listbox.Options>
						</Transition>
					</div>
				</Listbox>
			</div>
		</div>
	);
};
