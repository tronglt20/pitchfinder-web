import React from "react";

export const CustomerSearch = () => {
	return (
		<div className="flex items-center">
			<div className="sm:w-80 w-full shadow-lg">
				<input
					type="text"
					placeholder="Search"
					className="w-full py-2 px-3 rounded focus:ring-1 focus:ring-primary"
				/>
			</div>
		</div>
	);
};
