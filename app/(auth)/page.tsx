import DataCard from "@/components/core/DataCard";
import OrderCard from "@/components/core/OrderCard";
import { Button } from "@/components/ui/button";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { orderDetailDummyData } from "@/lib/utils";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
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
        {/* <div className="flex flex-nowrap gap-4 overflow-x-scroll no-scrollbar">
          {orderDetailDummyData.map((item, index) => {
            return <OrderCard key={index} item={item} />;
          })}
        </div> */}
        <Carousel>
          <CarouselContent>
            {orderDetailDummyData.map((item, index) => {
              return (
                <CarouselItem className={`basis-1/${orderDetailDummyData.length}`} key={index}>
                  <OrderCard item={item} />
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>
      <div className="flex w-full gap-4 flex-wrap">
        <Button variant={"outline"}>Add Clothes</Button>
        <Button variant={"outline"}>Add Service</Button>
        <Button variant={"outline"}>Add Wash Type</Button>
        <Button variant={"outline"}>Add Delivery Person</Button>
      </div>
    </MainWarapper>
  );
}
