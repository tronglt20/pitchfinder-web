import React, { useState } from "react";
import PitchItemDetail from "./pitchItemDetail";
import { PitchTypeEnums } from "../../enum";

export const PitchItem = ({ item, reload }) => {
	const [isOpen, setIsOpen] = useState(false);

	const getRandomImageFromArray = (imageArray) => {
		const randomIndex = Math.floor(Math.random() * imageArray.length);
		const randomImage = imageArray[randomIndex];
		return randomImage;
	};

	const seedRandomImage = getRandomImageFromArray([
		"https://barcelonapremiersc.com/wp-content/uploads/2022/02/pitch-in-soccer-scaled.jpg",
		"https://snapsoccer.com/wp-content/webpc-passthru.php?src=https://snapsoccer.com/wp-content/uploads/2022/01/corner-lines.jpg&nocache=1",
		"https://as1.ftcdn.net/v2/jpg/05/00/21/88/1000_F_500218890_VyoaYuQvhnJ6uTVFnOp3MyyVV2HGT3fC.jpg",
	]);

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
					src={seedRandomImage}
					alt="Paella dish"
					className="bg-gray-300 rounded-t-lg w-full"
				/>
				<div className="p-4">
					<h4 className="m-0">{item.name}</h4>
					<p className="m-0 h-20 overflow-auto no-scrollbar">
						{item.description}
					</p>
					<hr className="my-2" />
					<div className="flex justify-between h-30px">
						<p>Type: {PitchTypeEnums[item?.type]}</p>
						<p>Price: {item.price} vnđ</p>
					</div>
				</div>
			</div>
			<PitchItemDetail
				isOpen={isOpen}
				onClose={closeModal}
				item={item}
				image={seedRandomImage}
				reload={reload}
			/>
		</>
	);
};
