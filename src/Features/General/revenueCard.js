import React from "react";

export const RevenueCard = (props) => {
	return (
		<div className="bg-white rounded shadow-lg">
			<div className="p-4">
				<h2 className="text-dark text-2xl font-bold">600$</h2>
				<p className="text-sm text-gray-800">Total Earning</p>
			</div>
			<div className="p-4">
				<button className="px-4 py-2 bg-primary rounded text-white hover:bg-secondary hover:text-primary mr-2">
					Share
				</button>
				<button className="px-4 py-2 bg-primary rounded text-white hover:bg-secondary hover:text-primary">
					Learn More
				</button>
			</div>
		</div>
	);
};
