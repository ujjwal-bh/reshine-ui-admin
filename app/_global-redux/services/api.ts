import { ApiError } from "@/interfaces/api-error.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/v1/admin/",
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
export const api = createApi({
  reducerPath: "api",
  baseQuery: customBaseQuery,
  tagTypes: ["ORDERS"],

  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { email, password },
      }),
    }),
  }),
});

export const {
  useLoginMutation,
} = api;
