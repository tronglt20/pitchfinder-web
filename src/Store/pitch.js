import { createSlice } from "@reduxjs/toolkit";

const pitchSlice = createSlice({
  name: "pitch",
  initialState: {
    pitchs: [],
  },
  reducers: {
    setPitchsState(state, actions) {
      state.pitchs = actions.payload.data;
    },
    addPitch(state, actions) {
      const newPitch = actions.payload;
      state.pitchs.push(newPitch);
    },
  },
});

export const pitchActions = pitchSlice.actions;
export default pitchSlice.reducer;
