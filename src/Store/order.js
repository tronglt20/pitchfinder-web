import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    customers: [],
  },
  reducers: {
    setOrderState(state, actions) {
      state.orders = actions.payload.data
        ? actions.payload.data
        : actions.payload;
    },
    setCustomerState(state, actions) {
      state.customers = actions.payload.data
        ? actions.payload.data
        : actions.payload;
    },
  },
});

export const orderActions = orderSlice.actions;
export default orderSlice.reducer;
