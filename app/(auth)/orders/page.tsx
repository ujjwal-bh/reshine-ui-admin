"use client"
import Filter from "@/components/core/Filter";
import OrderCard from "@/components/core/OrderCard";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import Loading from "../loading";
import { useGetAllOrdersQuery } from "@/app/global-redux/services/order-api";

export default function Orders() {
  const {data: ordersData, isSuccess: ordersSuccess, isError: ordersError, isLoading: ordersLoading, isFetching: ordersFetching} = useGetAllOrdersQuery()
  

  console.log(ordersData)
  if(ordersFetching || ordersLoading){
    return <Loading/>
  }
  return (
    <MainWarapper>
      <div className="flex justify-between gap-2 items-center lg:flex-col lg:items-start">
        <SectionTitle>Orders</SectionTitle>
        <div className="flex gap-2 flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search order by id . . ."
            className="min-w-[15rem]"
          />
          <Filter />
          <Link href="/orders/order">
            <Button size={"sm"} className="min-w-32">
              Take Order
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-3 xl:grid-cols-2 md:grid-cols-1 gap-2">

        {
          ordersData?.results.map((order)=> (
            <OrderCard key={order.id} item={order} className="w-full"/>
          ))
        }
        {/* {orderDetailDummyData.map((item, index) => {
          return (
            <OrderCard
              key={index}
              item={item}
              className="w-full"
            />
          );
        })} */}
      </div>
    </MainWarapper>
  );
}
