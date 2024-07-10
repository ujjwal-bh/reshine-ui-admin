"use client";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { IOrderInOrders } from "@/interfaces/order.interface";




interface IProps {
  // [TODO CHANGE AFTER CHANGES IN API]
  item: IOrderInOrders;
  className?: string;
}



export default function OrderCard({ item, className }: IProps) {
  const { push } = useRouter();
  const {
    // amount,
    // clothesCount,
    // date,
    // location,
    orderId,
    // orderStatus,
    paymentStatus,
    user,
    id,
    // washType,
  } = item;

  const handleClick = () => {
    push(`/orders/${id}`);
  };
  return (
    <Card
      className={`p-4 w-full cursor-pointer ${
        className ? className : ""
      }`}
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <span className="text-gray-400 text-sm">Order ID: #{orderId}</span>
        <span className="text-gray-400 text-sm">"date</span>
      </div>
      <h1 className="font-semibold text-lg">washType</h1>
      <h2>{user}</h2>
      <span className="text-gray-400 text-sm break-words">location</span>
      <h3 className="text-gray-400 my-4">clothesCount Clothes</h3>

      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-black"> $ amount </h1>
          <span
            className={`text-sm text-center ${
              paymentStatus  ? "text-primary" : "text-error"
            }`}
          >
            {" "}
            {paymentStatus}
          </span>
        </div>
        <div
          className={`p-2 rounded-sm ${
            true
            // orderStatus === "Cancelled"
              ? "bg-errorTransparent text-error"
              : "bg-primaryTransparent text-primary"
          }`}
        >
          orderStatus
        </div>
      </div>
    </Card>
  );
}
