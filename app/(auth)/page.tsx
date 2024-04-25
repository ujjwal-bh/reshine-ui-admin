import DataCard from "@/components/core/DataCard";
import MainWarapper from "@/components/ui/mainWarapper";

export default function Home() {
  return (
    <MainWarapper>
      <div className="flex gap-8">
      <DataCard data={256} title="Orders till now"/>
      <DataCard data={213} title="Orders Completed"/>
      <DataCard data={30} title="Orders Received today"/>
      <DataCard data={43} title="Pending Orders"/>
      <DataCard data={97} title="Users"/>


      </div>
    </MainWarapper>
  );
}
