import { ApiError } from "@/interfaces/api-error.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { userApi } from "./user-api";
import { useDispatch } from "react-redux";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/v1/",
  // credentials: "include",
});

const customBaseQuery: typeof baseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    return {
      ...result,
      error: result.error as ApiError,
    };
  }
  return result;
};
// Define a service using a base URL and expected endpoints
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: customBaseQuery,
  tagTypes: ["AUTH"],

  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: ({ email, password }) => ({
        url: "admin/auth/login",
        method: "POST",
        body: { email, password },
      }),
      invalidatesTags: ["AUTH"],
      onQueryStarted: async (args, { dispatch, queryFulfilled }) => {
        try {
          await queryFulfilled;
          dispatch(userApi.util.invalidateTags(['ME']));
        } catch (error) {
          console.error("Failed to login", error);
        }
      }
    }),
   
  }),
});

export const {
  useLoginMutation,
} = authApi;
