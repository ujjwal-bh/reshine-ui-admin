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

export interface IOrders {
  limit: number;
  page: 1;
  results: IOrderInOrders[];
  totalPages: number;
  totalResults: number;
}
