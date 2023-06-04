import { createStore } from "redux";
import { createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseCustom(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return { counter: state.counter + 1 };
//   }

//   if (action.type === "decrement") {
//     return { counter: state.counter - 1 };
//   }
//   if (action.type === "increaseCustom") {
//     return { counter: state.counter + action.amount };
//   }
//   return state;
// };

// const store = createStore(counterReducer);
export const counterActions = counterSlice.actions;
export default counterSlice.reducer;
