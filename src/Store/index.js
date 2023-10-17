import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth";
import pitchReducer from "./pitch";
import orderReducer from "./order";

const store = configureStore({
	reducer: {
		auth: authReducer,
		pitch: pitchReducer,
		order: orderReducer,
	},
	middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
