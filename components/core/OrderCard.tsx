"use client";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { IOrderInOrders } from "@/interfaces/order.interface";
import { cn } from "@/lib/utils";

interface IProps {
  // [TODO CHANGE AFTER CHANGES IN API]
  item: IOrderInOrders;
  className?: string;
}

export default function OrderCard({ item, className }: IProps) {
  const { push } = useRouter();
  const {
    userInfo,
    orderId,
    paymentStatus,
    id,
    addressInfo,
    status,
    createdAt,
  } = item;

  console.log(item, "item");

  const handleClick = () => {
    push(`/orders/${id}`);
  };
  return (
    <Card
      className={`p-4 w-full cursor-pointer ${className ? className : ""}`}
      onClick={handleClick}
    >
      <div className="flex justify-between">
        <span className="text-gray-400 text-sm">Order ID: #{orderId}</span>
        <span className="text-gray-400 text-sm">
          {new Date(createdAt)?.toLocaleString()}
        </span>
      </div>
      <h1 className="font-semibold text-lg">washType</h1>
      <h2>{userInfo?.name}</h2>
      <span className="text-gray-400 text-sm break-words">
        {`${addressInfo.landmark}, ${addressInfo.address}...`}
      </span>
      <h3 className="text-gray-400 my-4">clothesCount Clothes</h3>

      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-black"> $ amount </h1>
          <span
            className={`text-sm text-center ${
              paymentStatus ? "text-primary" : "text-error"
            }`}
          >
            {" "}
            {paymentStatus}
          </span>
        </div>
        <div
          className={cn(
            "p-2 rounded-sm bg-primaryTransparent text-primary",
            status === "canceled" && "bg-errorTransparent text-error"
          )}
        >
          {status}
        </div>
      </div>
    </Card>
  );
}
