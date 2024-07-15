"use client";
import { useEffect } from "react";
import Link from "next/link";
import {
  useGetAllServicesQuery,
  useUpdateServiceMutation,
} from "@/app/_global-redux/services/laundry-service-api";
import {
  useDeleteServiceTypeMutation,
  useGetAllServiceTypesQuery,
  useUpdateServiceTypeMutation,
} from "@/app/_global-redux/services/service-type-api";
import AddServiceType from "@/components/core/services/AddServiceType";
import AddWashType from "@/components/core/services/AddWashType";
import FullCard from "@/components/ui/FullCard";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

export default function page() {
  const { data: serviceTypesData } = useGetAllServiceTypesQuery({
    page: 1,
    limit: 100,
  });

  const [
    updateServiceType,
    {
      isSuccess: updateServiceTypeSuccess,
      isError: updateServiceTypeError,

      reset: updateServiceTypeReset,
    },
  ] = useUpdateServiceTypeMutation();
  const [
    deleteServiceType,
    {
      isSuccess: deleteServiceTypeSuccess,
      isError: deleteServiceTypeError,

      reset: deleteServiceTypeReset,
    },
  ] = useDeleteServiceTypeMutation();
  const { data: laundryServicesData } = useGetAllServicesQuery({
    page: 1,
    limit: 100,
  });
  const [
    updateService,
    {
      isSuccess: updateLaundryServiceSuccess,
      isError: updateLaundryServiceError,
      reset: updateServiceReset,
    },
  ] = useUpdateServiceMutation();

  const handleActivateDeactivateServiceType = async (
    id: string,
    active: boolean
  ) => {
    await updateServiceType({ id, body: { active: !active } });
  };

  const handleActivateDeactivateLaundryService = async (
    id: string,
    active: boolean
  ) => {
    await updateService({ id, body: { active: !active } });
  };

  const handlDeleteServiceType = async (id: string) => {
    await deleteServiceType(id);
  };

  useEffect(() => {
    if (
      updateLaundryServiceError ||
      updateServiceTypeError ||
      deleteServiceTypeError
    ) {
      toast.error("something went wrong");
    }
    if (
      updateLaundryServiceSuccess ||
      updateServiceTypeSuccess ||
      deleteServiceTypeSuccess
    ) {
      toast.success("Operation successful");
    }
    deleteServiceTypeReset();
    updateServiceReset();
    updateServiceTypeReset();
  }, [
    updateLaundryServiceError,
    updateLaundryServiceSuccess,
    updateServiceTypeError,
    updateServiceTypeSuccess,
    deleteServiceTypeError,
    deleteServiceTypeSuccess,
  ]);
  return (
    <MainWarapper>
      {/* service type */}
      <SectionTitle>Service Type</SectionTitle>
      <div className="flex justify-between gap-8 lg:flex-col">
        <div className="w-[50%] gap-4 grid grid-cols-2 lg:w-full">
          {serviceTypesData?.results.map((service) => (
            <FullCard
              key={service.id}
              title={service.name}
              desc="lorem ipsum del emit jastai lamo lamo texts padh"
              Icon={FaStar}
              active={service.active}
              onClick={() =>
                handleActivateDeactivateServiceType(service.id, service.active)
              }
              canDelete={true}
              onDelete={() => handlDeleteServiceType(service.id)}
            />
          ))}
        </div>
        <div className="w-[40%] lg:w-full">
          <AddServiceType />
        </div>
      </div>
      {/* Wash type */}
      <SectionTitle>Wash Type</SectionTitle>
      <div className="flex justify-between gap-8 lg:flex-col ">
        <div className="w-[50%] grid grid-cols-2 gap-4 lg:w-full">
          {laundryServicesData?.results.map((service) => (
            <FullCard
              key={service.id}
              title={service.name}
              desc="lorem ipsum del emit jastai lamo lamo texts padh"
              Icon={FaStar}
              active={service.active}
              onClick={() =>
                handleActivateDeactivateLaundryService(
                  service.id,
                  service.active
                )
              }
            >
              <Link
                href={`/services/wash-type/${service.id}`}
                className="text-center text-gray-700"
              >
                change other details
              </Link>
            </FullCard>
          ))}
        </div>
        <div className="w-[40%] lg:w-full">
          <AddWashType />
        </div>
      </div>
    </MainWarapper>
  );
}
