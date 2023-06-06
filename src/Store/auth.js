import { createSlice } from "@reduxjs/toolkit";
const token = localStorage.getItem("accessToken");

const initialAuthState = {
  isAuthentication: token ? true : false,
  user: {},
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      state.isAuthentication = true;
      localStorage.setItem("accessToken", actions.payload.data.accessToken);
    },
    logout(state) {
      state.isAuthentication = false;
      localStorage.removeItem("accessToken");
    },
    setCurrentUser(state, actions) {
      state.user = actions.payload.data;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
