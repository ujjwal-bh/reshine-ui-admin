import { IIssues, IIssueTypes } from "@/interfaces/issues.interface";
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithReauth } from "./base-query";

// Define a service using a base URL and expected endpoints
export const issuesApi = createApi({
  reducerPath: "issuesApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["ISSUES", "ISSUE_TYPES"],

  endpoints: (builder) => ({
    getAllIssues: builder.query<IIssues, { page: number; limit: number }>({
      query: ({ page, limit }) => `admin/issues?page=${page}&limit=${limit}`,
      providesTags: ["ISSUES"]
    }),
    getAllIssueTypes: builder.query<IIssueTypes, { page: number; limit: number }>({
      query: ({ page, limit }) => `admin/issue-types?page=${page}&limit=${limit}`,
      providesTags: ["ISSUE_TYPES"]
    }),
    createIssueType: builder.mutation<any, any>({
      query: (body) => ({
        url: "admin/issue-types",
        method: "POST",
        body,
      }),
      invalidatesTags: ["ISSUE_TYPES"]
    }),
    deleteIssueType: builder.mutation<any, string>({
      query: (id) => ({
        url: `admin/issue-types/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["ISSUE_TYPES"]
    }),

  }),

});
export const {
  useCreateIssueTypeMutation,
  useGetAllIssueTypesQuery,
  useGetAllIssuesQuery,
  useDeleteIssueTypeMutation
} = issuesApi;
