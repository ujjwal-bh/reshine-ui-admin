import { BaseInterface } from "./baseInterface";

export interface IAddresses extends BaseInterface {
  results: IAddress[];
}

export interface IAddress {
  id: string;
  state: string;
  city: string;
  address: string;
  pincode: string;
  landmark: string;
  active: boolean;
  deliveryCharge: number;
}

export type LocationType = {
    [key: string]: string[]; // key is the state, value is an array of city names
  };