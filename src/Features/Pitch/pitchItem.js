import React, { useState } from "react";
import PitchItemDetail from "./pitchItemDetail";
import { PitchTypeEnums } from "../../enum";

const seedImage =
	"https://barcelonapremiersc.com/wp-content/uploads/2022/02/pitch-in-soccer-scaled.jpg";

export const PitchItem = ({ item, reload }) => {
	const [isOpen, setIsOpen] = useState(false);
	let img = item.attachments[0] ? item.attachments[0].presignedUrl : seedImage;

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
					src={img}
					alt="Paella dish"
					className="bg-gray-300 min-h-[260px] object-cover rounded-t-lg w-full"
				/>
				<div className="p-4">
					<h4 className="m-0">{item?.name}</h4>
					<p className="m-0 h-20 overflow-auto no-scrollbar">
						{item?.description}
					</p>
					<hr className="my-2" />
					<div className="flex justify-between h-30px">
						<p>Type: {PitchTypeEnums[item?.type]}</p>
						<p>Price: {item?.price} vnđ</p>
					</div>
				</div>
			</div>
			<PitchItemDetail
				isOpen={isOpen}
				onClose={closeModal}
				item={item}
				image={img}
				reload={reload}
			/>
		</>
	);
};
