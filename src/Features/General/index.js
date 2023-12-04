import React from "react";
import Header from "../../Components/ContentItem/header";
import { ColumnChart } from "./columnChart";
import { RevenueCard } from "./revenueCard";
import { SideBarCard } from "./sidebarCard";
import { LastestOrderChart } from "./lastestOrderChart";

export const General = () => {
	return (
		<>
			<Header content="Dashboard" />
			<div className="flex-grow">
				<div className="flex flex-wrap gap-5">
					<div className="w-[49%] h-fit">
						<div className="mb-4">
							<RevenueCard />
						</div>
						<div>
							<RevenueCard />
						</div>
					</div>
					<div className="w-[49%] h-fit">
						<SideBarCard />
					</div>
					<div className="w-[49%] h-fit">
						<ColumnChart />
					</div>
					<div className="w-[49%] h-fit">
						<LastestOrderChart />
					</div>
				</div>
			</div>
		</>
	);
};
