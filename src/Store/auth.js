import axios from "../axios";
import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
  isAuthentication: true,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state, action) {
      state.isAuthentication = true;
      console.log(action);

      axios
        .post(`/iam/authentication`, {
          userName: action.payload.email,
          password: action.payload.password,
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    logout(state) {
      state.isAuthentication = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
