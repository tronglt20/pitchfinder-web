import React from "react";
import Header from "../../Components/ContentItemMaterials/header";
import ColumnChart from "./columnChart";
import RevenueCard from "./revenueCard";
import SideBarCard from "./sidebarCard";
import LastestOrderChart from "./lastestOrderChart";
import { Box, Grid } from "@mui/material";

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
