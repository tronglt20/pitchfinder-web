import React from "react";
// import { Chart } from "react-google-charts";
import Chart from "react-apexcharts";

const chartData = {
	series: [
		{
			name: "Pitch A",
			data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
		},

		{
			name: "Pitch B",
			data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
		},
	],
};

const chartOneOptions = {
	legend: {
		show: false,
		position: "top",
		horizontalAlign: "left",
	},
	colors: ["#3C50E0", "#80CAEE"],
	chart: {
		height: 335,
		type: "area",
		dropShadow: {
			enabled: true,
			color: "#623CEA14",
			top: 10,
			blur: 4,
			left: 0,
			opacity: 0.1,
		},

		toolbar: {
			show: false,
		},
	},
	responsive: [
		{
			breakpoint: 1024,
			options: {
				chart: {
					height: 300,
				},
			},
		},
		{
			breakpoint: 1366,
			options: {
				chart: {
					height: 350,
				},
			},
		},
	],
	stroke: {
		width: [2, 2],
		curve: "straight",
	},

	markers: {
		size: 0,
	},
	labels: {
		show: false,
		position: "top",
	},
	grid: {
		xaxis: {
			lines: {
				show: true,
			},
		},
		yaxis: {
			lines: {
				show: true,
			},
		},
	},
	dataLabels: {
		enabled: false,
	},
	xaxis: {
		type: "category",
		categories: [
			"Sep",
			"Oct",
			"Nov",
			"Dec",
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
		],
		axisBorder: {
			show: false,
		},
		axisTicks: {
			show: false,
		},
	},
	yaxis: {
		title: {
			style: {
				fontSize: "0px",
			},
		},
		min: 0,
		max: 100,
	},
};

export const ColumnChart = () => {
	return (
		<div className="bg-white rounded shadow-lg">
			<Chart
				className="w-full"
				options={chartOneOptions}
				series={chartData.series}
				height={313}
			/>
		</div>
	);
};
