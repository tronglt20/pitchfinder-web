import React from "react";
import Chart from "react-apexcharts";

const chartTwoOptions = {
	series: [
		{
			name: "Sales",
			data: [44, 55, 41, 67, 22, 43, 65],
		},
		{
			name: "Revenue",
			data: [13, 23, 20, 8, 13, 27, 15],
		},
	],
	colors: ["#3056D3", "#80CAEE"],
	chart: {
		type: "bar",
		height: 335,
		stacked: true,
		toolbar: {
			show: false,
		},
		zoom: {
			enabled: false,
		},
	},

	responsive: [
		{
			breakpoint: 1536,
			options: {
				plotOptions: {
					bar: {
						borderRadius: 0,
						columnWidth: "25%",
					},
				},
			},
		},
	],
	plotOptions: {
		bar: {
			horizontal: false,
			borderRadius: 0,
			columnWidth: "25%",
			borderRadiusApplication: "end",
			borderRadiusWhenStacked: "last",
		},
	},
	dataLabels: {
		enabled: false,
	},

	xaxis: {
		categories: ["M", "T", "W", "T", "F", "S", "S"],
	},
	legend: {
		position: "top",
		horizontalAlign: "left",
		fontFamily: "Satoshi",
		fontWeight: 500,
		fontSize: "14px",

		markers: {
			radius: 99,
		},
	},
	fill: {
		opacity: 1,
	},
};

export const SideBarCard = (props) => {
	return (
		<div className="bg-white shadow-lg rounded">
			<Chart
				className="w-full"
				options={chartTwoOptions}
				type="bar"
				series={chartTwoOptions.series}
				height={313}
			/>
		</div>
	);
};
