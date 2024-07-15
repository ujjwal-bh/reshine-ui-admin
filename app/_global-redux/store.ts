import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "./services/api";
import { userApi } from "./services/user-api";
import { orderApi } from "./services/order-api";
import { clothesApi } from "./services/clothes-api";
import { laundryServiceApi } from "./services/laundry-service-api";
import { serviceTypeApi } from "./services/service-type-api";
import { paymentApi } from "./services/payment-api";


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    [clothesApi.reducerPath]: clothesApi.reducer,
    [laundryServiceApi.reducerPath]: laundryServiceApi.reducer,
    [serviceTypeApi.reducerPath]: serviceTypeApi.reducer,
    [paymentApi.reducerPath]: paymentApi.reducer


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(api.middleware)
      .concat(userApi.middleware)
      .concat(orderApi.middleware)
      .concat(clothesApi.middleware)
      .concat(laundryServiceApi.middleware)
      .concat(serviceTypeApi.middleware)
      .concat(paymentApi.middleware)
});

setupListeners(store.dispatch);
