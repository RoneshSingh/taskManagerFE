import { configureStore } from "@reduxjs/toolkit";

import { authApi, taskApi } from "./authAPI";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [taskApi.reducerPath]: taskApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(taskApi.middleware),
});

setupListeners(store.dispatch);
