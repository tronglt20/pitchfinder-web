import React, { useState } from "react";
import PitchItemDetail from "./pitchItemDetail";
import { PitchTypeEnums } from "../../enum";

export const PitchItem = ({ item }) => {
	const [isOpen, setIsOpen] = useState(false);

	const openModal = () => {
		setIsOpen(true);
	};
	const closeModal = () => {
		setIsOpen(false);
	};

	return (
		<>
			<div
				className="sm:w-[30.5%] lg:w-[31%] xl:w-[32.1%] cursor-pointer shadow-lg rounded-lg"
				onClick={openModal}
			>
				<img
					src="https://res-1.cloudinary.com/gll/image/upload/c_fit,f_auto,h_330,w_750/v1680515328/dacpbxqimhxybqtsdecb.jpg"
					alt="Paella dish"
					className="bg-gray-300 rounded-t-lg w-full"
				/>
				<div className="p-4">
					<h4 className="m-0">{item.name}</h4>
					<p className="m-0">{item.description}</p>
					<hr className="my-2" />
					<div className="flex justify-between h-30px">
						<p>Type: {PitchTypeEnums[item?.type]}</p>
						<p>Price: {item.price} vnđ</p>
					</div>
				</div>
			</div>
			<PitchItemDetail isOpen={isOpen} onClose={closeModal} item={item} />
		</>
	);
};
