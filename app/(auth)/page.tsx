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
import { useGetAllOrdersQuery } from "../_global-redux/services/order-api";
import Loading from "./loading";

export default function Home() {
  const {
    data: getAllOrdersData,
    isLoading: getAllOrdersLoading,
    isFetching: getAllOrdersFetching,
    // isSuccess: getAllOrdersSuccess,
  } = useGetAllOrdersQuery({ page: 1, limit: 10 });

  if (getAllOrdersFetching || getAllOrdersLoading) return <Loading />;
  return (
    <MainWarapper>
      <div className="flex gap-4 overflow-x-scroll no-scrollbar">
        <DataCard data={256} title="Orders till now" />
        <DataCard data={213} title="Orders Completed" />
        <DataCard data={30} title="Orders Received today" />
        <DataCard data={43} title="Pending Orders" />
        <DataCard data={97} title="Users" />
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
