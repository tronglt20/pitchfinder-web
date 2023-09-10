import React from "react";
import Header from "../../Components/ContentItemMaterials/header";
import ColumnChart from "./columnChart";
import RevenueCard from "./revenueCard";
import SideBarCard from "./sidebarCard";
import LastestOrderChart from "./lastestOrderChart";
import { Box, Grid, Paper, styled } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function General() {
  return (
    <Box>
      <Header content="Dashboard" />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <RevenueCard />
          </Grid>
          <Grid item xs={4}>
            <RevenueCard />
          </Grid>
          <Grid container item xs={4} spacing={1}>
            <Grid item xs={12}>
              <SideBarCard />
            </Grid>
            <Grid item xs={12}>
              <SideBarCard />
            </Grid>
          </Grid>
          <Grid item xs={8}>
            <ColumnChart />
          </Grid>
          <Grid item xs={4}>
            <LastestOrderChart />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default General;
