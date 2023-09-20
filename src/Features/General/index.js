import React from "react";
import Header from "../../Components/ContentItemMaterials/header";
import { ColumnChart } from "./columnChart";
import { RevenueCard } from "./revenueCard";
import { SideBarCard } from "./sidebarCard";
import { LastestOrderChart } from "./lastestOrderChart";

export const General = () => {
	return (
		<>
			<Header content="Dashboard" />
			<div className="flex-grow">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="md:col-span-1">
						<div className="mb-4">
							<RevenueCard />
						</div>
						<div className="mb-4">
							<RevenueCard />
						</div>
					</div>
					<div className="md:col-span-1">
						<div className="mb-4">
							<div className="mb-4">
								<SideBarCard />
							</div>
							<div className="mb-4">
								<SideBarCard />
							</div>
						</div>
					</div>
					<div className="md:col-span-1">
						<ColumnChart />
					</div>
					<div className="md:col-span-1">
						<LastestOrderChart />
					</div>
				</div>
			</div>
		</>
	);
};
