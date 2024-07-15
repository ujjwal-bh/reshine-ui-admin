import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";
import { ICloth, IClothes } from "@/interfaces/clothes.interface";

// Define a service using a base URL and expected endpoints
export const clothesApi = createApi({
  reducerPath: "clothesApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["CLOTHES", "CLOTH"],

  endpoints: (builder) => ({
    getAllClothes: builder.query<IClothes, { page: number; limit: number }>({
      query: ({ page, limit }) => `admin/clothes?page=${page}&limit=${limit}`,
      providesTags: ["CLOTHES"]
    }),
    getCloth: builder.query<ICloth, { id: string }>({
      query: ({ id }) => `admin/clothes/${id}`,
    }),
    createCloth: builder.mutation<any, any>({
      query: (body) => ({
        url: "admin/clothes",
        method: "POST",
        body,
      }),
      invalidatesTags: ["CLOTHES"]
    }),
    updateCloth: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `admin/clothes/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteCloth: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/clothes/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["CLOTHES"]
    }),
  }),
});
export const {
  useCreateClothMutation,
  useDeleteClothMutation,
  useGetAllClothesQuery,
  useGetClothQuery
} = clothesApi;
