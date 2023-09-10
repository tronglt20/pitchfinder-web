import { Box } from "@mui/material";
import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Element", "Density", { role: "style" }],
  ["Copper", 8.94, "#b87333"],
  ["Silver", 10.49, "silver"],
  ["Gold", 19.3, "gold"],
  ["Platinum", 21.45, "color: #e5e4e2"],
];

function ColumnChart(props) {
  return (
    <Box sx={{ padding: "24px", bgcolor: "#cccccc", borderRadius: "4px" }}>
      <Chart chartType="ColumnChart" width="100%" height="400px" data={data} />
    </Box>
  );
}

export default ColumnChart;
