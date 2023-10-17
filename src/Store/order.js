import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
	name: "order",
	initialState: {
		orders: [],
		customers: [],
	},
	reducers: {
		setOrderState(state, action) {
			state.orders = action.payload.data ? action.payload.data : action.payload;
		},
		setCustomerState(state, action) {
			state.customers = action.payload.data
				? action.payload.data
				: action.payload;
		},
	},
});

export const { setOrderState, setCustomerState } = orderSlice.actions;
export default orderSlice.reducer;
