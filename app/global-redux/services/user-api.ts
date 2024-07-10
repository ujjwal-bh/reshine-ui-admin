import { ApiError } from "@/interfaces/api-error.interface";
import {  IUser } from "@/interfaces/login.interface";
import { BaseQueryFn, FetchArgs, FetchBaseQueryError, createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/v1/user",
  // credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("RESHINE_ACCESS_TOKEN");
    console.log(token, "token ho hai yo")
    if(token){
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
});

const customBaseQuery: typeof baseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error) {
    // Here you can customize error handling if needed
    return {
      ...result,
      error: result.error as ApiError,
    };
  }
  return result;
};

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, any, FetchBaseQueryError> = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);
  
    // if(result.error && result?.error?.status === 401){
    //   const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
    //   if(refreshResult?.data){
    //     const refresh_token = refreshResult.data?.refresh_token;
    //     if(refresh_token) {
    //       localStorage.setItem("refresh_token", refresh_token);
    //     }
    //     result = await baseQuery(args, api, extraOptions);
    //   } else {
    //     console.log("yo ni bhayena");
    //     return result;
    //   }
    // }
    return result;
  }
// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["USER"],

  endpoints: (builder) => ({
    getCurrentUser: builder.query<IUser, void>({
        query: () => "",
    }),
    
  }),
});

export const { useGetCurrentUserQuery} = userApi;
