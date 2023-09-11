import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#00B14F", 'opacity: 0.2'],
  ["Silver", 10.49, "silver"],
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"],
];

export const ColumnChart = (props) => {
  return (
    <div className="p-6 bg-white rounded shadow-lg">
      <Chart chartType="ColumnChart" className="w-full h-96" data={data} />
    </div>
  );
}