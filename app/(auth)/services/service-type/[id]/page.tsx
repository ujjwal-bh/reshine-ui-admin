"use client";
import { useRouter } from "next/navigation";
import { SyntheticEvent, useEffect, useState } from "react";

import Back from "@/components/ui/Back";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { Button, ButtonWithPopup } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { Textarea } from "@/components/ui/textarea";
import toast from "react-hot-toast";
import { FaMoneyBill } from "react-icons/fa";

import {
  useDeleteServiceTypeMutation,
  useGetServiceTypeQuery,
  useUpdateServiceTypeMutation,
} from "@/app/_global-redux/services/service-type-api";
import { RATE_TYPE } from "@/lib/constants";

export default function page({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    description: "",
    rate: 0,
  });

  const [rateType, setRateType] = useState("");

  const { data: serviceTypeData, isSuccess: serviceSuccess } =
    useGetServiceTypeQuery({ id: params.id });

  const [
    updateServiceType,
    {
      isError: updateServiceTypeError,
      isSuccess: updateServiceTypeSuccess,
      isLoading: updateServiceTypeLoading,
    },
  ] = useUpdateServiceTypeMutation();
  const [
    deleteServiceType,
    { isError: deleteServiceTypeError, isSuccess: deleteServiceTypeSuccess },
  ] = useDeleteServiceTypeMutation();

  const handleupdateServiceType = async (e: SyntheticEvent) => {
    e.preventDefault();
    await updateServiceType({ id: params.id, body: { ...data, rateType } });
  };

  const handledeleteServiceType = async () => {
    await deleteServiceType(params.id);
  };

  useEffect(() => {
    if (serviceSuccess) {
      setData({
        name: serviceTypeData?.name,
        description: serviceTypeData?.description || "",
        rate: serviceTypeData?.rate,
      });
      setRateType(serviceTypeData?.rateType || "");
    }
  }, [serviceSuccess]);

  useEffect(() => {
    if (updateServiceTypeError) {
      toast.error("Something went wrong.");
    }
    if (updateServiceTypeSuccess) {
      toast.success("Operation successful.");
    }
  }, [updateServiceTypeError, updateServiceTypeSuccess]);

  useEffect(() => {
    if (deleteServiceTypeError) {
      toast.error("Something went wrong.");
    }
    if (deleteServiceTypeSuccess) {
      toast.success("Operation successful.");
      router.push("/services");
    }
  }, [deleteServiceTypeError, deleteServiceTypeSuccess]);

  return (
    <MainWarapper>
      <div className="flex gap-4 justify-between items-center flex-wrap">
        <div className="flex items-center gap-4">
          <Back />
          <SectionTitle>Service type detail</SectionTitle>
        </div>
        <ButtonWithPopup
          className="border border-error text-error rounded-md h-10 w-[12rem]"
          confirmClick={handledeleteServiceType}
        >
          Delete Service Type
        </ButtonWithPopup>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex gap-8 lg:flex-col lg:gap-4">
          <div className="flex flex-col gap-4 w-[50%] lg:w-full">
            <div>
              <label htmlFor="rateType">Rate Type</label>
              <SelectWithSearch
                placeholder="Select the rate type"
                options={RATE_TYPE}
                setData={setRateType}
                data={{ label: rateType, value: rateType }}
              />
            </div>
            <div>
              <label htmlFor="rate">
                {rateType === "percentage" ? "Rate" : "Amount"}
              </label>
              <InputWithIcon
                LeftIcon={FaMoneyBill}
                value={data.rate}
                onChange={(e) =>
                  setData({ ...data, rate: Number(e.target.value) })
                }
              />
            </div>
          </div>
          <div className="w-[50%] lg:w-full flex-col gap-4">
            <div className="mb-4">
              <label htmlFor="name">Service Name</label>
              <InputWithIcon
                LeftIcon={FaMoneyBill}
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="name">Service Description</label>
              <Textarea
                value={data.description}
                onChange={(e) =>
                  setData({ ...data, description: e.target.value })
                }
              />
            </div>
          </div>
        </div>
        <Button
          className="w-48"
          size={"sm"}
          type="submit"
          onClick={handleupdateServiceType}
          disabled={updateServiceTypeLoading}
        >
          {" "}
          Edit
        </Button>
      </form>
    </MainWarapper>
  );
}
