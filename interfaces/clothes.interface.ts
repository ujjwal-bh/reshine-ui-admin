export interface IClothes {
  results: ICloth[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface ICloth {
  name: string
  id: string
}
