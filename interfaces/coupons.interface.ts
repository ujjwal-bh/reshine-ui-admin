import { BaseInterface } from "./baseInterface";

export interface ICoupons extends BaseInterface {
  results: ICoupon[];
}

export interface ICoupon {
  id: string;
  title: string;
  description: string;
  code: string;
  discountType: string;
  discount: number;
  expiry: string;
  active: boolean;
}
