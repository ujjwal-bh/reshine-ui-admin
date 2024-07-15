export interface IPayment {
  orderId: string;
  paymentId: string;
  razorpayOrderId: string
  amount:number
  currency: string
  paymentMethod: string;
  description: string
  international: false;
  email: string
  phone: string
  status: string
  createdAt: string
  updatedAt: string
  id: string
}

export interface IPayments {
    results: IPayment[],
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}