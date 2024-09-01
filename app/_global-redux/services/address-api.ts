import { IUser } from "@/interfaces/login.interface";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { IAddress, IAddresses } from "@/interfaces/address.interface";

// Define a service using a base URL and expected endpoints
export const addressApi = createApi({
  reducerPath: "addressApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["ADDRESSES"],

  endpoints: (builder) => ({
    createAddress: builder.mutation<any, any>({
      query: (body) => ({
        url: `admin/addresses`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["ADDRESSES"]
    })
    ,
    getAddress: builder.query<IAddress, string>({
      query: (id) => `/admin/addresses/${id}`,
    }),
    getAllAddresses: builder.query<IAddresses, { page: number; limit: number, role?: string }>({
      query: ({ page, limit, role }) => `admin/addresses?${role ? 'role='+ role + '&': ''}page=${page}&limit=${limit}`,
      providesTags: ["ADDRESSES"]
    }),
    updateAddress: builder.mutation<IAddress, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `admin/addresses/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ADDRESSES"]
    }),
    deleteAddress: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/addresses/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ADDRESSES"]
      
    }),
    toggleAddressActive: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/addresses/${id}/toggle`,
        method: "PATCH",
      }),
      invalidatesTags: ["ADDRESSES"]
      
    }),
  }),
});

export const {
  useCreateAddressMutation,
  useGetAddressQuery,
  useGetAllAddressesQuery,
  useUpdateAddressMutation,
  useDeleteAddressMutation,
  useToggleAddressActiveMutation
} = addressApi;
