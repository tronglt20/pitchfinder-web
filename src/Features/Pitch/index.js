import React, { useEffect, useState, useCallback } from "react";
import Header from "../../Components/ContentItem/header";
import PitchSearch from "./pitchSearch";
import { PitchItem } from "./pitchItem";
import { GetPitchsAPI } from "../../Services/pitchService";
import AddPitchPopup from "./addPitchPopup";

const Pitch = () => {
	const [responseData, setResponseData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const getData = useCallback(async () => {
		try {
			const response = await GetPitchsAPI();
			setResponseData(response.data);
		} catch (error) {
			console.log("Get Data from Pitch got error");
		}
	}, []);

	useEffect(() => {
		getData();
	}, [getData]);

	return (
		<>
			<Header content="Pitch Management" />
			<div className="flex justify-between">
				<PitchSearch />
				<div className="flex items-center justify-center">
					<button
						type="button"
						onClick={openModal}
						className="rounded-md bg-primary px-7 py-2 text-sm font-medium text-white hover:bg-secondary hover:text-primary focus:outline-none"
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
								d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg>
					</button>
					<AddPitchPopup
						isOpen={isOpen}
						onClose={closeModal}
						reload={getData}
					/>
				</div>
			</div>
			<div className="mt-8 h-fit flex flex-wrap gap-6">
				{responseData.map((item, index) => (
					<PitchItem key={item?.id} item={item} reload={getData} />
				))}
			</div>
		</>
	);
};

export default Pitch;
