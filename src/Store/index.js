import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";
import pitchReducer from "./pitch";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    pitch: pitchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
