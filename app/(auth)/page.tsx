"use client";
import DataCard from "@/components/core/DataCard";
import OrderCard from "@/components/core/OrderCard";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { orderDetailDummyData } from "@/lib/utils";
import { useGetAllOrdersQuery, useGetOrderSummaryQuery } from "../_global-redux/services/order-api";
import Loader from "@/components/ui/loader";

export default function Home() {
  const {
    data: getAllOrdersData,
    isLoading: getAllOrdersLoading,
    isFetching: getAllOrdersFetching,
  } = useGetAllOrdersQuery({ page: 1, limit: 10 });

  const {data: orderSummaryData} = useGetOrderSummaryQuery()

  if (getAllOrdersFetching || getAllOrdersLoading) return <Loader />;
  return (
    <MainWarapper>
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        <DataCard data={orderSummaryData?.totalOrders || 0} title="Orders till now" />
        <DataCard data={orderSummaryData?.completed || 0} title="Orders Completed" />
        <DataCard data={orderSummaryData?.orderCountToday || 0} title="Orders Received today" />
        <DataCard data={orderSummaryData?.pending || 0} title="Pending Orders" />
        <DataCard data={orderSummaryData?.users || 0} title="Users" />
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle>Recent Orders</SectionTitle>
        <Carousel>
          <CarouselContent>
            {getAllOrdersData?.results?.map((item: any, index: number) => {
              return (
                <CarouselItem
                  className={`basis-1/${orderDetailDummyData.length}`}
                  key={index}
                >
                  <OrderCard item={item} className="min-w-[25rem]" />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-1 gap-2">
        <Button variant={"outline"} className="w-full">
          Add Clothes
        </Button>
        <Button variant={"outline"} className="w-full">
          Add Service
        </Button>
        <Button variant={"outline"} className="w-full">
          Add Wash Type
        </Button>
        <Button variant={"outline"} className="w-full">
          Add Delivery Person
        </Button>
      </div>
    </MainWarapper>
  );
}
