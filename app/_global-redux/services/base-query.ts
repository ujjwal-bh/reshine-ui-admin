import { BaseQueryFn, FetchArgs, FetchBaseQueryError, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


const baseQuery = fetchBaseQuery({
    baseUrl: "http://localhost:5000/v1",
    // credentials: "include",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("RESHINE_ACCESS_TOKEN");
      if(token){
        headers.set("Authorization", `Bearer ${token}`);
      }
      return headers;
    }
  });
  
 export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  any,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result?.error?.status === 401) {
    const refreshTokenArgs: FetchArgs = {
      url: "admin/auth/refresh-tokens",
      method: "POST",
      body: { refreshToken: localStorage.getItem("RESHINE_REFRESH_TOKEN") },
    };

    const refreshResult: any = await baseQuery(refreshTokenArgs, api, extraOptions);

    if (refreshResult?.data) {
      const refresh_token = refreshResult.data?.refresh?.token;
      if (refresh_token) {
        localStorage.setItem("RESHINE_REFRESH_TOKEN", refresh_token);
        localStorage.setItem("RESHINE_ACCESS_TOKEN", refreshResult?.data?.access?.token);

        // Check if args is a string or FetchArgs
        if (typeof args === 'string') {
          args = {
            url: args,
            headers: new Headers({
              "Authorization": `Bearer ${refreshResult.data.access.token}`,
            }),
          };
        } else {
          // Update the headers with the new access token
          const newHeaders = new Headers(args.headers as HeadersInit);
          newHeaders.set("Authorization", `Bearer ${refreshResult.data.access.token}`);
          
          // Clone the args with the updated headers
          args = {
            ...args,
            headers: newHeaders,
          };
        }

        result = await baseQuery(args, api, extraOptions);
      }
    } else {
      console.log("yo ni bhayena");
      return result;
    }
  }
  return result;
};
