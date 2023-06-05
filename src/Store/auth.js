import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthentication: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, actions) {
      state.isAuthentication = true;
      localStorage.setItem(
        "accessToken",
        JSON.stringify(actions.payload.data.accessToken)
      );
    },
    logout(state) {
      state.isAuthentication = false;
      localStorage.removeItem("accessToken");
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
