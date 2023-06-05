import { createSlice } from "@reduxjs/toolkit";

const pitchSlice = createSlice({
  name: "pitch",
  initialState: {
    pitchs: [],
  },
  reducers: {
    setPitchsState(state, actions) {
      state.pitchs = actions.payload;
    },
    addPitch(state, actions) {
      const newPitch = actions.payload;
      const existed = state.items.find((_) => _.id == newPitch.id);
      if (!existed) {
        state.items.push(newPitch);
      }
    },
  },
});

export const pitchActions = pitchSlice.actions;
export default pitchSlice.reducer;
