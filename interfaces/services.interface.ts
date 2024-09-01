import { BaseInterface } from "./baseInterface";

export interface IServiceTypes extends BaseInterface {
  results: IServiceType[];
}

export interface IServiceType {
  rateType: string;
  rate: number;
  active: boolean;
  name: string;
  createdAt: string;
  updatedAt: string;
  id: string;
  description: string;
}

export interface ILaundryServices extends BaseInterface {
  results: ILaundryService[];
}

export interface ILaundryService {
  active: boolean;
  name: string;
  description: string | undefined;
  createdAt: string;
  updatedAt: string;
  id: string;
}
