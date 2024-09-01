import { IUser } from "@/interfaces/login.interface";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { ICoupon, ICoupons } from "@/interfaces/coupons.interface";

// Define a service using a base URL and expected endpoints
export const couponsApi = createApi({
  reducerPath: "couponsApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["COUPONS"],

  endpoints: (builder) => ({
    createCoupon: builder.mutation<any, any>({
      query: (body) => ({
        url: `admin/coupons`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["COUPONS"]
    })
    ,
    getCoupon: builder.query<ICoupon, string>({
      query: (id) => `/admin/coupons/${id}`,
    }),
    getAllcoupons: builder.query<ICoupons, { page: number; limit: number, role?: string }>({
      query: ({ page, limit, role }) => `admin/coupons?${role ? 'role='+ role + '&': ''}page=${page}&limit=${limit}`,
      providesTags: ["COUPONS"]
    }),
    updateCoupon: builder.mutation<ICoupon, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `admin/coupons/${id}`,
        method: "PATCH",
        body,
      }),
      invalidatesTags: ["COUPONS"]
    }),
    deleteCoupon: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/coupons/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["COUPONS"]
      
    }),
    expireCoupon: builder.mutation<any, string>({
        query: (id) => ({
          url: `admin/coupons/${id}/expire`,
          method: "PATCH",
        }),
        invalidatesTags: ["COUPONS"]   
      }),
  }),
});

export const {
  useGetAllcouponsQuery,
  useCreateCouponMutation,
  useDeleteCouponMutation,
  useUpdateCouponMutation,
  useGetCouponQuery,
  useExpireCouponMutation
  
} = couponsApi;
