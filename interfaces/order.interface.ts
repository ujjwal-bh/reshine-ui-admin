export interface IOrderInOrders {
  tax: number;
  discount: number;
  status: string;
  paymentStatus: boolean;
  user: string;
  serviceType: string;
  deliveryCharge: number;
  discountType: "string";
  pin: string;
  address: string;
  orderId: number;
  razorpayOrderId: string;
  id: string;
}

export interface IOrders {
  results: IOrderInOrders[];
}
// export interface IOrder{
//     results: IOrder[]
// }

// export enum ORDER_STATUS{
//     created,
//     pending
// }

// export enum DISCOUNT_TYPE{
//     fixed
// }

export interface ISingleOrder {
  tax: number;
  discount: number;
  status: string;
  paymentStatus: boolean;
  user: string;
  serviceType: string;
  deliveryCharge: number;
  discountType: string;
  pin: string;
  address: string;
  orderId: number;
  razorpayOrderId: string;
  userInfo: IUserInfo;
  pickupInfo: any;
  dropInfo: any;
  serviceTypeInfo: {
    active: true;
    name: "Express";
    id: "668d6d5181947d1e53bd7907";
  };
  userCouponInfo: any;
  id: string;
}

interface IUserInfo {
  phone: string;
  email: string;
  id: string;
}

interface IServiceTypeInfo {
  active: boolean;
  name: string;
  id: string;
}
