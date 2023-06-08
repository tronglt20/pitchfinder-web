import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";
import pitchReducer from "./pitch";
import orderReducer from "./order";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    pitch: pitchReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export default store;
