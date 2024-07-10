import { IOrders, ISingleOrder } from "@/interfaces/order.interface";
import {
    BaseQueryFn,
    FetchArgs,
    FetchBaseQueryError,
    createApi,
    fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/v1/admin",
  // credentials: "include",
  prepareHeaders: (headers) => {
    const token = localStorage.getItem("RESHINE_ACCESS_TOKEN");
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});


const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  any,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

//   if(result.error && result?.error?.status === 401){
//     const refreshResult = await baseQuery("/auth/refresh", api, extraOptions);
//     if(refreshResult?.data){
//       const refresh_token = refreshResult.data?.refresh_token;
//       if(refresh_token) {
//         localStorage.setItem("refresh_token", refresh_token);
//       }
//       result = await baseQuery(args, api, extraOptions);
//     } else {
//       console.log("yo ni bhayena");
//       return result;
//     }
//   }
  return result;
};
// Define a service using a base URL and expected endpoints
export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["ORDERS"],

  endpoints: (builder) => ({
    // order
    getAllOrders: builder.query<IOrders, void>({
      query: () => "orders",
      providesTags: ["ORDERS"],
    }),
    getOrder: builder.query<ISingleOrder, {id: string}>({
      query: ({id}) => `orders/${id}`,
      providesTags: ["ORDERS"],
    }),
    createOrder: builder.mutation<any, any>({
      query: (body) => ({
        url: "orders",
        method: "POST",
        body,
      }),
    }),
    updateOrder: builder.mutation<any, { id: string; body: any }>({
      query: ({ id, body }) => ({
        url: `orders/${id}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteOrder: builder.mutation<any, void>({
      query: (id) => ({
        url: `orders/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetAllOrdersQuery,
  useGetOrderQuery,
  useCreateOrderMutation,
  useUpdateOrderMutation,
  useDeleteOrderMutation,
} = orderApi;
