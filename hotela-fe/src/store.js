import { configureStore } from "@reduxjs/toolkit";
import authenticateSlice from "./Store/auth/authSlice";
import { authApi } from "./Store/Slices/authenticationSlice";
export const store = configureStore({
  reducer: {
    auth: authenticateSlice,
    [authApi.reducerPath]: authApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([authApi.middleware]),
});
