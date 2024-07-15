export interface ICreateClothServicePricing {
  price: number;
  cloth: string;
  service: string;
}

export interface IClothServicePricings{
    results: IClothServicePricing[],
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}

 interface IClothServicePricing {
  active: boolean;
  cloth: string
  service:string;
  price: number
  clothInfo: {
    name: string;
    id: string;
  };
  id: string
}
