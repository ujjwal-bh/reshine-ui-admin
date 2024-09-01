import { IUser } from "@/interfaces/login.interface";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";

// Define a service using a base URL and expected endpoints
export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["USERS", "USER", "ME"],

  endpoints: (builder) => ({
    createUser: builder.mutation<any, any>({
      query: (body) => ({
        url: `admin/users`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["USERS"]
    })
    ,
    getCurrentUser: builder.query<IUser, void>({
      query: () => "user",
      providesTags: ["ME"],
    }),
    getAllUsers: builder.query<any, { page: number; limit: number, role?: string }>({
      query: ({ page, limit, role }) => `admin/users?${role ? 'role='+ role + '&': ''}page=${page}&limit=${limit}`,
      providesTags: ["USERS"]
     
    }),
    getUser: builder.query<IUser, string>({
      query: (id) => `admin/users/${id}`,
      providesTags: (result, error, id) => [{ type: "USER", id }],
    }),
    updateUser: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `admin/users/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["USERS"]
    }),
    deactivateUser: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["USERS"]
      
    }),
  }),
});

export const {
  useGetCurrentUserQuery,
  useGetAllUsersQuery,
  useDeactivateUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
  useCreateUserMutation
} = userApi;
