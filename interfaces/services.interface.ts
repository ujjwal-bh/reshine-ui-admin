export interface IServiceTypes {
  results: IServiceType[];
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface IServiceType {
  rateType: string;
  rate: number;
  active: boolean;
  name: string;
  createdAt: string;
  updatedAt: string;
  id: string;
}

export interface ILaundryServices {
  results: ILaundryService[]
  page: number;
  limit: number;
  totalPages: number;
  totalResults: number;
}

export interface ILaundryService {
        active: boolean;
        name: string;
        description: string| undefined
        createdAt: string;
        updatedAt: string;
        id: string;
}
