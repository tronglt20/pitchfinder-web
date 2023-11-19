import { createSlice } from "@reduxjs/toolkit";

const isAuth = localStorage.getItem("isAuthentication");
const initialAuthState = {
	isAuthentication: isAuth,
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
