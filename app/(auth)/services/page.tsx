"use client";
import { useEffect } from "react";
import {
  useGetAllServicesQuery,
  useUpdateServiceMutation,
} from "@/app/_global-redux/services/laundry-service-api";
import {
  useDeleteServiceTypeMutation,
  useGetAllServiceTypesQuery,
  useUpdateServiceTypeMutation,
} from "@/app/_global-redux/services/service-type-api";
import toast from "react-hot-toast";
import ServiceTable from "@/components/core/ServiceTable/ServiceTable";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { Button } from "@/components/ui/button";
import {useRouter} from "next/navigation"
import WashTypeTable from "@/components/core/WashTypeTable/WashTypeTable";

export default function page() {

  const router = useRouter()
  const { data: serviceTypesData } = useGetAllServiceTypesQuery({
    page: 1,
    limit: 100,
  });

  const { data: washTypeData } = useGetAllServicesQuery({
    page: 1,
    limit: 100,
  });


  const handleAddServiceType = () => {
    router.push(`/services/service-type`)
  }
  const handleAddWashType = () => {
    router.push(`/services/wash-type`)
  }
  return (
    <MainWarapper>
      {/* service type */}
      <div className="flex justify-between items-center">
        <SectionTitle>Service Type</SectionTitle>
        <Button size={"sm"} onClick={handleAddServiceType}>Add Service Type</Button>
      </div>
      <ServiceTable services={serviceTypesData?.results || []}/>
      {/* Wash type */}
      <div className="flex justify-between items-center">
      <SectionTitle>Wash Type</SectionTitle>
        <Button size={"sm"} onClick={handleAddWashType}>Add Wash Type</Button>
      </div>
      <WashTypeTable washTypes={washTypeData?.results || []} />
    </MainWarapper>
  );
}
