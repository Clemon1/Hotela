import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const serverURL = import.meta.env.VITE_serverURL;

export const hotelApi = createApi({
  reducerPath: "hotelAPi",
  baseQuery: fetchBaseQuery({ baseUrl: `${serverURL}/hotels` }),
  tagTypes: ["hotela"],
  endpoints: (build) => ({
    //search and filter hotel by Location, name, price etc...
    searchHotels: build.query({
      query: ({ name, locationName, minRating, minPrice, maxPrice }) =>
        `/search?locationName=${locationName}&name=${name}&minRating=${minRating}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      providesTags: ["hotela"],
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
      invalidatesTags: ["hotela"],
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
      invalidatesTags: ["hotela"],
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
      invalidatesTags: ["hotela"],
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
      invalidatesTags: ["hotela"],
    }),
    // forgot Password Link Endpoints
    forgetPasswordLink: build.mutation({
      query(body) {
        return {
          url: `/forgotPassword/OTP`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["hotela"],
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
      invalidatesTags: ["hotela"],
    }),
  }),
});
