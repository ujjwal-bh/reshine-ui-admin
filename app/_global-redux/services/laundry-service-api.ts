import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { IOrderInOrders, IOrders } from "@/interfaces/order.interface";
import { ILaundryService, ILaundryServices } from "@/interfaces/services.interface";
import { IClothServicePricings, ICreateClothServicePricing } from "@/interfaces/cloth-service-pricing.interface";

// Define a service using a base URL and expected endpoints
export const laundryServiceApi = createApi({
  reducerPath: "laundryServiceApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["SERVICES", "SERVICE", "PRICING"],

  endpoints: (builder) => ({
    // order
    getAllServices: builder.query<ILaundryServices, { page: number; limit: number }>({
      query: ({ page, limit }) => `admin/services?page=${page}&limit=${limit}`,
      providesTags: ["SERVICES"],
    }),
    getService: builder.query<ILaundryService, string>({
      query: (id) => `admin/services/${id}`,
      providesTags: ["SERVICES"],
    }),
    createService: builder.mutation<any, any>({
      query: (body) => ({
        url: "admin/services",
        method: "POST",
        body,
      }),
      invalidatesTags: ["SERVICES"],
    }),
    updateService: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `admin/services/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["SERVICES"],
    }),
    deleteService: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/services/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["SERVICES"],
    }),

    getAllClothServicePricing: builder.query<IClothServicePricings, string>({
      query: (id) => `admin/pricings?service=${id}&page=1&limit=1000`,
      providesTags: ["PRICING"],
    }),

    createClothServicePricing: builder.mutation<any, ICreateClothServicePricing>({
      query: (body) => ({
        url: `admin/pricings`,
        method: "POST",
        body
      }),
      invalidatesTags: ["PRICING"],
    }),
    deleteClothServicePricing: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/pricings/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["PRICING"],
    }),


  }),
});
export const {
  useCreateServiceMutation,
  useDeleteServiceMutation,
  useGetAllServicesQuery,
  useGetServiceQuery,
  useUpdateServiceMutation,
  useCreateClothServicePricingMutation,
  useDeleteClothServicePricingMutation,
  useGetAllClothServicePricingQuery
} = laundryServiceApi;
