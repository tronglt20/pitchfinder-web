import axios from "../axios";
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthentication: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    async login(state, action) {
      await axios
        .post("/iam/authentication", {
          username: action.payload.email,
          password: action.payload.password,
        })
        .then((response) => {
          console.log("hello");
          state.isAuthentication = true;
          localStorage.setItem("accessToken", response.payload.accessToken);
        })
        .catch((error) => {
          state.isAuthentication = false;
        });
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
