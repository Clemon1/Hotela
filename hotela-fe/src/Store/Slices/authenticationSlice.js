import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serverURL = import.meta.env.VITE_serverURL;
// register slice
export const authApi = createApi({
  reducerPath: "authAPi",
  baseQuery: fetchBaseQuery({ baseUrl: `${serverURL}/user` }),
  tagTypes: ["auth"],
  endpoints: (build) => ({
    //Get a single user
    getSingleUser: build.query({
      query: (id) => `/admin/allUser/${id}`,
      providesTags: ["auth"],
    }),
    // Register Endpoints
    register: build.mutation({
      query(body) {
        return {
          url: `/createUser`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["auth"],
    }),
    // Login Endpoints
    login: build.mutation({
      query(body) {
        return {
          url: `/login`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["auth"],
    }),
    // Register Endpoints
    verifyAccount: build.mutation({
      query({ userId, ...body }) {
        return {
          url: `/OTP/${userId}/verify`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["auth"],
    }),
  }),
});

export const {
  useGetSingleUserQuery,
  useRegisterMutation,
  useLoginMutation,
  useVerifyAccountMutation,
} = authApi;
