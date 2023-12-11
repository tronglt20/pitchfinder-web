import React, { useEffect, useState, useCallback } from "react";
import Header from "../../Components/ContentItem/header";
import { PitchItem } from "./pitchItem";
import { GetPitchsAPI } from "../../Services/pitchService";
import AddPitchPopup from "./addPitchPopup";
import image from "../../Assets/empty_product_banner.c076afe7.png";

const Pitch = () => {
	const [responseData, setResponseData] = useState([]);
	const [isOpen, setIsOpen] = useState(false);
	const [searchString, setSearchString] = useState("");
	const [type, setType] = useState(0);

	const handleSearchStringChange = (e) => {
		setSearchString(e.target.value);
	};

	const handleTypeChange = (e) => {
		setType(e.target.value);
	};

	const handleFilter = useCallback(() => {
		const searchParams = new URLSearchParams();
		switch (type) {
			case "0":
				break;
			case "1":
				searchParams.append("pitchType", 1);
				break;
			case "2":
				searchParams.append("pitchType", 2);
				break;
			case "3":
				searchParams.append("pitchType", 3);
				break;
			default:
				break;
		}
		if (searchString !== "") {
			searchParams.append("keyName", searchString);
		}
		return searchParams;
	}, [type, searchString]);

	const closeModal = () => {
		setIsOpen(false);
	};

	const openModal = () => {
		setIsOpen(true);
	};

	const getData = useCallback(async () => {
		try {
			const response = await GetPitchsAPI(handleFilter());
			setResponseData(response.data);
		} catch (error) {
			console.log("Get Data from Pitch got error");
		}
	}, [handleFilter]);

	useEffect(() => {
		getData();
	}, [getData, handleFilter]);

	return (
		<>
			<Header content="Pitch Management" />
			<div className="flex justify-between">
				<div className="flex">
					<input
						type="text"
						name="search"
						onChange={handleSearchStringChange}
						value={searchString}
						placeholder="Search by name"
						className="rounded-md border border-transparent bg-white shadow-md px-4 py-2 focus:outline-none focus:border-primary
						transition duration-500 ease-in-out"
					/>
					<select
						name="type"
						onChange={handleTypeChange}
						value={type}
						className="rounded-md border border-transparent bg-white shadow-md px-4 py-2 focus:outline-none focus:border-primary
						transition duration-500 ease-in-out ml-2"
					>
						<option value="0">All</option>
						<option value="1">5</option>
						<option value="2">7</option>
						<option value="3">11</option>
					</select>
				</div>
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
				{responseData.length > 0 ? (
					responseData.map((item) => <PitchItem key={item.id} item={item} />)
				) : (
					<div className="flex w-full flex-col h-[76vh] p-10 justify-center items-center ">
						<img src={image} alt="" className="w-[400px] h-[400px]" />
						<p className="text-2xl text-red-400 font-bold">Empty pitch :(</p>
					</div>
				)}
			</div>
		</>
	);
};

export default Pitch;
