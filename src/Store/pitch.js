import { createSlice } from "@reduxjs/toolkit";

const pitchSlice = createSlice({
  name: "pitch",
  initialState: {
    pitchs: [],
    termPitchs: [],
  },
  reducers: {
    setPitchsState(state, actions) {
      state.pitchs = actions.payload.data;
      state.termPitchs = actions.payload.data;
    },
    addPitch(state, actions) {
      const newPitch = actions.payload;
      state.pitchs.push(newPitch);
      state.termPitchs.push(newPitch);
    },
    getPitchsByFilter(state, actions) {
      const filterValue = actions.payload;
      if (filterValue) {
        state.pitchs = state.pitchs.filter((pitch) =>
          pitch.name.includes(filterValue)
        );
      } else {
        state.pitchs = state.termPitchs;
      }
    },
  },
});

export const pitchActions = pitchSlice.actions;
export default pitchSlice.reducer;
