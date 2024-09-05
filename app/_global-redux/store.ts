import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./services/auth-api";
import { userApi } from "./services/user-api";
import { orderApi } from "./services/order-api";
import { clothesApi } from "./services/clothes-api";
import { laundryServiceApi } from "./services/laundry-service-api";
import { serviceTypeApi } from "./services/service-type-api";
import { paymentApi } from "./services/payment-api";
import { issuesApi } from "./services/issues-api";
import { addressApi } from "./services/address-api";
import { couponsApi } from "./services/coupon-api";


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [clothesApi.reducerPath]: clothesApi.reducer,
    [laundryServiceApi.reducerPath]: laundryServiceApi.reducer,
    [serviceTypeApi.reducerPath]: serviceTypeApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer,
    [issuesApi.reducerPath]: issuesApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [couponsApi.reducerPath]: couponsApi.reducer,




  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(userApi.middleware)
      .concat(orderApi.middleware)
      .concat(clothesApi.middleware)
      .concat(laundryServiceApi.middleware)
      .concat(serviceTypeApi.middleware)
      .concat(paymentApi.middleware)
      .concat(issuesApi.middleware)
      .concat(addressApi.middleware)
      .concat(couponsApi.middleware)
});

setupListeners(store.dispatch);
