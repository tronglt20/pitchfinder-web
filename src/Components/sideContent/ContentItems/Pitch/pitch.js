import React from "react";
import Header from "../../ContentItemMaterials/header";
import PitchSearch from "./pitchSearch";
import PitchItem from "./pitchItem";
import { Box } from "@mui/material";
import AddButton from "./addButton";

function Pitch() {
  const pitchs = [
    {
      name: "Sân A",
      description: "Khu thứ 5 cạnh khu vực dàn đèn",
      type: "Sân 5",
      price: 400,
      status: "Hoạt động",
    },
    {
      name: "Sân B",
      description: "Khu thứ 5 cạnh khu vực dàn đèn",
      type: "Sân 5",
      price: 400,
      status: "Hoạt động",
    },
    {
      name: "Sân C",
      description: "Khu thứ 5 cạnh khu vực dàn đèn",
      type: "Sân 5",
      price: 400,
      status: "Hoạt động",
    },

    {
      name: "Sân C",
      description: "Khu thứ 5 cạnh khu vực dàn đèn",
      type: "Sân 5",
      price: 400,
      status: "Hoạt động",
    },
  ];

  return (
    <Box>
      <Header content="Quản lý Sân bóng" />
      <PitchSearch />
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
        }}
      >
        <AddButton />
        {pitchs.map((e, index) => (
          <PitchItem
            name={e.name}
            description={e.description}
            price={e.price}
            type={e.type}
            status={e.status}
          />
        ))}
      </Box>
    </Box>
  );
}

export default Pitch;
