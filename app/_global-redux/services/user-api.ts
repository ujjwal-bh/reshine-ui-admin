import { IUser } from "@/interfaces/login.interface";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["USERS", "USER", "ME"],

  endpoints: (builder) => ({
    getCurrentUser: builder.query<IUser, void>({
      query: () => "user",
      providesTags: ["ME"],
    }),
    getAllUsers: builder.query<any, { page: number; limit: number }>({
      query: ({ page, limit }) => `admin/users?page=${page}&limit=${limit}`,
     
    }),
    getUser: builder.query<any, string>({
      query: (id) => `admin/users/${id}`,
      providesTags: (result, error, id) => [{ type: "USER", id }],
    }),
    updateUser: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `admin/users/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deactivateUser: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/users/${id}`,
        method: "DELETE",
      }),
      
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useGetAllUsersQuery,
  useDeactivateUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} = userApi;
