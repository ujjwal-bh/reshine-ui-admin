import { IAddress } from "./address.interface";
import { BaseInterface } from "./baseInterface";
import { IServiceType } from "./services.interface";

export interface IOrderInOrders {
  user: string;
  addressInfo: {
    country: string;
    active: boolean;
    state: string;
    city: string;
    address: string;
    landmark: string;
    pincode: number;
  };
  deliveryCharge: number;
  discount: number;
  discountType: string;
  dropInfo: any;
  id: string;
  orderId: number;
  orderItemsInfo: any[];
  paymentStatus: boolean;
  pickupInfo: any;
  pin: string;
  serviceTypeInfo: {
    active: boolean;
    name: string;
  };
  status: string;
  tax: number;
  createdAt: string;
  userCouponInfo: any;
  userInfo: {
    phone: string;
    email: string;
    name: string;
    id: string;
  };
}

export interface IOrderInfo {
  totalOrders: number;
  completed: number;
  pending: number;
  users: number;
  orderCountToday: number;
}

export interface IOrders extends BaseInterface {
  results: IOrder[];
}

export interface IOrder {
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
  createdAt: string;
  updatedAt: string;
  orderId: number;
  userInfo: {
    phone: string;
    id: string;
  };
  pickupInfo: any;
  dropInfo: any;
  serviceTypeInfo: IServiceType;
  addressInfo: IAddress;
  userCouponInfo: null;
  orderItemsInfo: IOrderItemsInfo[];
  id: "66df11cddd91832f8110a10d";
}

interface IOrderItemsInfo {
  order: string;
  clothServicePrice: string;
  quantity: number;
  total: number;
  clothServicePricingInfo: {
    cloth: string;
    service: string;
    price: number;
    clothInfo: {
      active: boolean;
      name: string;
      id: string;
    };
    serviceInfo: {
      active: boolean;
      name: string;
      id: string;
    };
    id: string;
  };
  id: string;
}
