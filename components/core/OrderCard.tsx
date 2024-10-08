"use client";
import { useRouter } from "next/navigation";
import { Card } from "../ui/card";
import { IOrder, IOrderInOrders } from "@/interfaces/order.interface";
import { cn } from "@/lib/utils";

interface IProps {
  // [TODO CHANGE AFTER CHANGES IN API]
  item: IOrder;
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
    serviceTypeInfo,
    orderItemsInfo,


  } = item;

  const totalClothesQuantity = orderItemsInfo.reduce((acc, orderItem)=>{
        return acc + orderItem.quantity
  }, 0)

  const totalOrderAmount = orderItemsInfo.reduce((acc, orderItem)=>{
    return acc + orderItem.total
}, 0)


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
    <h1 className="text-lg">Service:  <span className="font-semibold ">{ serviceTypeInfo?.name || "service not found"}</span></h1>
      <h2>{userInfo?.phone}</h2>
      <span className="text-gray-400 text-sm break-words">
        {`${addressInfo.landmark}, ${addressInfo.address} ${addressInfo.city} ${addressInfo.state}, ${addressInfo.pincode}`}
      </span>
      <h3 className="text-gray-400 my-4">{totalClothesQuantity} Clothes</h3>

      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center">
          <h1 className="text-xl font-black">Rs {} </h1>
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
