"use client";
import Link from "next/link";
import { useEffect } from "react";
import { notFound } from "next/navigation";

import {
  useGetOrderQuery,
  useUpdateOrderMutation,
} from "@/app/_global-redux/services/order-api";

import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import Back from "@/components/ui/Back";
import Loader from "@/components/ui/loader";
import { FaCheckCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";

export default function SingleOrderPage({ params }: { params: { id: string } }) {
  const {
    data: orderData,
    isLoading: orderLoading,
    isFetching: orderFetching,
    isSuccess: orderSuccess,
    isError: isOrderError
  } = useGetOrderQuery({ id: params.id });
  const [
    updateOrder,
    {
      isError: updateOrderError,
      isLoading: updateOrderLoading,
      isSuccess: updateOrderSuccess,
    },
  ] = useUpdateOrderMutation();

  const handleMarkDelivered = async () => {
    await updateOrder({
      id: orderData!.id,
      body: { status: "delivered"},
    });
  };

  const handleCancelOrder = async () => {
    await updateOrder({
      id: orderData!.id,
      body: { status: "canceled"},
    });
  };

  const handleMarkPaid = async () => {
    await updateOrder({
      id: orderData!.id,
      body: { paymentStatus: !orderData!.paymentStatus },
    });
  };

  useEffect(() => {
    if (updateOrderSuccess) {
      toast.success("Operation successful");
    }
  }, [updateOrderSuccess]);

  if (orderFetching || orderLoading) return <Loader />;

  if(isOrderError) return notFound()

  return (
    <MainWarapper>
      <div className="flex items-center gap-8 justify-between pb-4 border-b-2 border-gray-100">
        <div className="flex items-center gap-4">
          <Back />
          <SectionTitle>Order Details</SectionTitle>
        </div>
        <h1 className="text-gray-400">Order ID: {orderData?.orderId}</h1>
      </div>
      <div className="flex gap-4 flex-wrap">
        <div className="py-2 px-4 min-w-32 text-center bg-primaryTransparent text-primary">
          {orderData?.serviceTypeInfo?.name}
        </div>
        <div className="py-2 px-4 min-w-32 text-center bg-primaryTransparent text-primary">
          wash type not available
          {/* this data is not available */}
        </div>
        <div className="py-2 px-4 min-w-32 text-center bg-primaryTransparent text-primary">
          {orderData?.addressInfo?.landmark}, {orderData?.addressInfo?.address},{" "}
          {orderData?.addressInfo?.city}, {orderData?.addressInfo?.country} -{" "}
          {orderData?.addressInfo?.pincode}
        </div>
      </div>
      <div className="flex gap-48 lg:flex-col lg:gap-8">
        <div className="flex flex-col gap-4">
          {/* this data is not available as well */}
          <h1 className="text-lg">10 Clothes data not available</h1>
          <div className="text-gray-400">
            <div className="flex items-center gap-16 mt-4">
              <div className="flex items-center gap-4">
                <span className="w-32 break-words">Shirts</span>
                <span className="w-16 break-words">x 4</span>
              </div>
              <span>$ 23</span>
            </div>
            <div className="flex items-center gap-16 mt-4">
              <div className="flex items-center gap-4">
                <span className="w-32 break-words">Track pants black</span>
                <span className="w-16 break-words">x 4</span>
              </div>
              <span>$ 23</span>
            </div>
          </div>
        </div>
        <div>
          <h1 className="mb-4">Order Timeline</h1>
          <div className="flex gap-8 text-success">
            <div className="flex flex-col justify-center items-center">
              <FaCheckCircle />
              <div className="h-12 w-[2px] bg-success"></div>
            </div>
            <span className="text-foreground mt-[-4px]">
              Order placed on{" "}
              {new Date(orderData?.createdAt || "").toLocaleDateString()}
            </span>
          </div>
          <div className="flex gap-8 text-gray-400">
            <div className="flex flex-col justify-center items-center">
              <FaCheckCircle />
              <div className="h-12 w-[2px] bg-gray-400"></div>
            </div>
            <span className="text-foreground mt-[-4px]">
              Order picked up on pickup date
            </span>
          </div>
          <div className="flex gap-8 text-gray-400">
            <div className="flex flex-col justify-center items-center">
              <FaCheckCircle />
            </div>
            <span className="text-foreground mt-[-4px]">
              Expected delivery on delivery date
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-black text-xl">$ 234</h1>
        <span
          className={cn(
            "text-sm",
            orderData?.paymentStatus ? "text-success" : "text-error"
          )}
        >
          {orderData?.paymentStatus ? "Paid" : "Not Paid"}
        </span>
      </div>
      <div className="flex gap-4 lg:flex-wrap">
        <Link href={`/orders/${orderData!.id}/edit`} className="w-full">
          <Button className="min-w-[12rem] w-full">Edit Order</Button>
        </Link>
        <Button className="min-w-[12rem] w-full" onClick={handleMarkDelivered}>
          Mark delivered
        </Button>

        <Button
          className="min-w-[12rem] w-full"
          variant={orderData?.paymentStatus ? "errorOutline" : "default"}
          onClick={handleMarkPaid}
        >
          {orderData?.paymentStatus ? "Mark unpaid" : "Mark paid"}
        </Button>
        <Button
          className="min-w-[12rem] bg-error w-full"
          onClick={handleCancelOrder}
        >
          Cancel Order
        </Button>
      </div>
    </MainWarapper>
  );
}
