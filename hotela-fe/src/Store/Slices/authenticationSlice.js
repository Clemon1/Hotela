import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serverURL = import.meta.env.VITE_serverURL;
// register slice
export const authApi = createApi({
  reducerPath: "authAPi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${serverURL}/user`,
  }),
  tagTypes: ["auth"],
  endpoints: (build) => ({
    //Get a single user
    getSingleUser: build.query({
      query: (id) => `/profile/${id}`,
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
      query(body) {
        return {
          url: `/OTP/verify`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["auth"],
    }),
    // resend-OTP Endpoints
    resendOTP: build.mutation({
      query(body) {
        return {
          url: `/OTP/resendOTP`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["auth"],
    }),
    // OTP forgot Password Link Endpoints
    forgetPasswordLink: build.mutation({
      query(body) {
        return {
          url: `/forgotPassword/OTP`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["auth"],
    }),
    // resetPassword Endpoints
    resetPassword: build.mutation({
      query({ passwordToken, ...body }) {
        return {
          url: `forgotPassword/${passwordToken}`,
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
  useResendOTPMutation,
  useForgetPasswordLinkMutation,
  useResetPasswordMutation,
} = authApi;
