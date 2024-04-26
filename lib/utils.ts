import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export interface IOrderDetail {
  orderId: number,
    date: string,
    washType: string,
    user: string,
    location: string,
    clothesCount: number,
    amount: number,
    paymentStatus: string,
    orderStatus: string
}

export const orderDetailDummyData: IOrderDetail[] = [
  {
    orderId: 12345,
    date: "12 Mar, 2024",
    washType: "Regular Wash",
    user: "Ujjwal Bhattarai",
    location: "Kanakapura Rd, Bengaluru, Karnataka 562112",
    clothesCount: 14,
    amount: 123,
    paymentStatus: "Not Paid",
    orderStatus: "Pending Pickup"
},
{
  orderId: 12345,
  date: "12 Mar, 2024",
  washType: "Regular Wash",
  user: "Ujjwal Bhattarai",
  location: "Kanakapura Rd, Bengaluru, Karnataka 562112",
  clothesCount: 14,
  amount: 234,

  paymentStatus: "Not Paid",
  orderStatus: "Out for delivery"
},
{
  orderId: 12345,
  date: "12 Mar, 2024",
  washType: "Premium Wash and Press",
  user: "Jainath Thakur",
  location: "Kanakapura Rd, Bengaluru, Karnataka 562112",
  clothesCount: 11,
  amount: 23,
  paymentStatus: "Paid",
  orderStatus: "Delivered"
},
{
  orderId: 12345,
  date: "12 Mar, 2024",
  washType: "Regular Wash",
  user: "Nikhil Kumar Thakur",
  location: "Kanakapura Rd, Bengaluru, Karnataka 562112",
  clothesCount: 14,
  amount: 123,
  paymentStatus: "Not Paid",
  orderStatus: "Cancelled"
},
{
  orderId: 12345,
  date: "12 Mar, 2024",
  washType: "Regular Wash",
  user: "Ujjwal Bhattarai",
  location: "Kanakapura Rd, Bengaluru, Karnataka 562112",
  clothesCount: 14,
  amount: 123,
  paymentStatus: "Not Paid",
  orderStatus: "Pending Pickup"
},
{
  orderId: 12345,
  date: "12 Mar, 2024",
  washType: "Regular Wash",
  user: "Ujjwal Bhattarai",
  location: "Kanakapura Rd, Bengaluru, Karnataka 562112",
  clothesCount: 14,
  amount: 123,

  paymentStatus: "Not Paid",
  orderStatus: "Pending Pickup"
},
{
  orderId: 12345,
  date: "12 Mar, 2024",
  washType: "Regular Wash",
  user: "Ujjwal Bhattarai",
  location: "Kanakapura Rd, Bengaluru, Karnataka 562112",
  clothesCount: 14,
  amount: 123,

  paymentStatus: "Not Paid",
  orderStatus: "Pending Pickup"
},
]
