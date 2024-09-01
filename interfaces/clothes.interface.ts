import { BaseInterface } from "./baseInterface";

export interface IClothes extends BaseInterface {
  results: ICloth[];
  // page: number;
  // limit: number;
  // totalPages: number;
  // totalResults: number;
}

export interface ICloth {
  name: string
  id: string
}
