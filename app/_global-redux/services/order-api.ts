import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { ICreateOrder, IOrderInfo, IOrderInOrders, IOrders } from "@/interfaces/order.interface";

// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["ORDERS", "ORDER"],

  endpoints: (builder) => ({
    // order
    getAllOrders: builder.query<IOrders, { page: number; limit: number }>({
      query: ({ page, limit }) => `admin/orders?page=${page}&limit=${limit}`,
      providesTags: ["ORDERS"]
    }),
    getOrder: builder.query<IOrderInOrders, { id: string }>({
      query: ({ id }) => `admin/orders/${id}`,
      providesTags: ["ORDER"]
    }),
    getOrderSummary: builder.query<IOrderInfo, void>({
      query: () => `admin/orders/info`,
    }),
    createOrder: builder.mutation<ICreateOrder, any>({
      query: (body) => ({
        url: "admin/orders",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ORDERS"]
    }),
    updateOrder: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `admin/orders/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["ORDER"]
    }),
    deleteOrder: builder.mutation<any, void>({
      query: (id) => ({
        url: `admin/orders/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ORDERS"]
    }),
  }),
});
export const {
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
  useGetOrderSummaryQuery
} = orderApi;
