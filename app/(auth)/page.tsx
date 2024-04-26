import DataCard from "@/components/core/DataCard";
import OrderCard from "@/components/core/OrderCard";
import { Button } from "@/components/ui/button";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { orderDetailDummyData } from "@/lib/utils";

export default function Home() {
  return (
    <MainWarapper>
      <div className="flex gap-4">
        <DataCard data={256} title="Orders till now" />
        <DataCard data={213} title="Orders Completed" />
        <DataCard data={30} title="Orders Received today" />
        <DataCard data={43} title="Pending Orders" />
        <DataCard data={97} title="Users" />
      </div>
      <div className="flex flex-col gap-2">
        <SectionTitle>Recent Orders</SectionTitle>
        <div className="flex flex-nowrap gap-4 overflow-x-scroll no-scrollbar">
          {
            orderDetailDummyData.map((item, index)=> {
              return <OrderCard key={index} item={item}/>
            })
          }


          
        </div>
      </div>
      <div className="flex w-full gap-4">
        <Button variant={"outline"} className="w-full">Add Clothes</Button>
        <Button variant={"outline"} className="w-full">Add Service</Button>
        <Button variant={"outline"} className="w-full">Add Wash Type</Button>
        <Button variant={"outline"} className="w-full">Add Delivery Person</Button>
      </div>
    </MainWarapper>
  );
}
