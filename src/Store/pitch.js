import { createSlice } from "@reduxjs/toolkit";

const pitchSlice = createSlice({
	name: "pitch",
	initialState: {
		pitchs: [],
		termPitchs: [],
		store: {},
	},
	reducers: {
		setStoreState(state, actions) {
			state.store = actions.payload.data
				? actions.payload.data
				: actions.payload;
		},
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
			const searchValue = actions.payload.search;
			const typeValue = actions.payload.type;

			if (searchValue || typeValue) {
				state.pitchs = state.termPitchs.filter(
					(pitch) =>
						pitch.name.includes(searchValue) || pitch.type === typeValue
				);
			} else {
				state.pitchs = state.termPitchs;
			}
		},
	},
});

export const pitchActions = pitchSlice.actions;
export default pitchSlice.reducer;
