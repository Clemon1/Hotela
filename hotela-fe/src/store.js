import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});
