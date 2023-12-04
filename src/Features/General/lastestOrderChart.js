import React from "react";
import { OrderItem } from "./orderItem";

export const LastestOrderChart = (props) => {
	return (
		<div className="bg-white py-2 px-5 shadow-md rounded">
			<div className="flex flex-col gap-2">
				<p className="text-center text-3xl text-primary font-bold pt-3">
					Lastest Orders
				</p>
				<OrderItem />
				<OrderItem />
				<OrderItem />
			</div>
		</div>
	);
};
