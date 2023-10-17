import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
	isAuthentication: false,
	user: {},
};

const authSlice = createSlice({
	name: "authentication",
	initialState: initialAuthState,
	reducers: {
		login(state, action) {
			state.isAuthentication = true;
			state.user = action.payload.data;
		},
		logout(state) {
			state.isAuthentication = false;
			state.user = {};
		},
		setCurrentUser(state, action) {
			state.isAuthentication = true;
			state.user = action.payload.data;
		},
	},
});

export const { login, logout, setCurrentUser } = authSlice.actions;
export default authSlice.reducer;
