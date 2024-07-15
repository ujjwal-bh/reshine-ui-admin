import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { IServiceType, IServiceTypes } from "@/interfaces/services.interface";

export const serviceTypeApi = createApi({
  reducerPath: "serviceTypeApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["SERVICETYPES", "SERVICETYPE"],

  endpoints: (builder) => ({
    // order
    getAllServiceTypes: builder.query<IServiceTypes, { page: number; limit: number }>({
      query: ({ page, limit }) => `admin/service-types?page=${page}&limit=${limit}`,
      providesTags: ["SERVICETYPES"],
    }),
    getServiceType: builder.query<IServiceType, { id: string }>({
      query: ({ id }) => `admin/service-types/${id}`,
      providesTags: ["SERVICETYPE"],
    }),
    createServiceType: builder.mutation<any, any>({
      query: (body) => ({
        url: "admin/service-types",
        method: "POST",
        body,
      }),
      invalidatesTags: ["SERVICETYPES"],
    }),
    updateServiceType: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `admin/service-types/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["SERVICETYPES"],
    }),
    deleteServiceType: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/service-types/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SERVICETYPES"],
    }),
  }),
});
export const {
  useCreateServiceTypeMutation,
  useDeleteServiceTypeMutation,
  useGetAllServiceTypesQuery,
  useGetServiceTypeQuery,
  useUpdateServiceTypeMutation
} = serviceTypeApi;
