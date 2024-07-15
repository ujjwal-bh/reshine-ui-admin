import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { ICloth, IClothes } from "@/interfaces/clothes.interface";
import { IPayments } from "@/interfaces/payment.interface";

// Define a service using a base URL and expected endpoints
export const paymentApi = createApi({
  reducerPath: "paymentApi",
  baseQuery: baseQueryWithReauth,

  endpoints: (builder) => ({
    getAllPayments: builder.query<IPayments, { page: number; limit: number }>({
      query: ({ page, limit }) => `admin/payments?page=${page}&limit=${limit}`,
    }),
    

  }),
});
export const {
useGetAllPaymentsQuery
} = paymentApi;
