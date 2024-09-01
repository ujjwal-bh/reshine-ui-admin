"use client";

import { useCreateServiceTypeMutation } from "@/app/_global-redux/services/service-type-api";
import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { Textarea } from "@/components/ui/textarea";
import { ApiError } from "@/interfaces/api-error.interface";
import { RATE_TYPE } from "@/lib/constants";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaMonero, FaPen, FaPercent } from "react-icons/fa";

const INIT = {
  name: "",
  description: "",
  rate: 0,
};
export default function AddService() {
  const [formData, setFormData] = useState(INIT);
  const [rateType, setRateType] = useState("");
  const router = useRouter();

  const [createServiceType, { isLoading, isError, isSuccess, error }] =
    useCreateServiceTypeMutation();

  const handleCreateServiceType = async (e: React.FormEvent) => {
    e.preventDefault();

    await createServiceType({ ...formData, rateType });
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as ApiError).data.message);
    }
    if (isSuccess) {
      toast.success("Operation Successful");
    }
  }, [isError, isSuccess]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/services");
    }
  }, [isSuccess]);

  return (
    <MainWarapper>
      <div className="flex items-center gap-8">
        <Back />
        <SectionTitle>Add Service Type</SectionTitle>
      </div>
      <form
        className="w-[50%] flex flex-col gap-4 lg:w-full"
        onSubmit={handleCreateServiceType}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Rate Type</label>
          <SelectWithSearch
            options={RATE_TYPE}
            setData={setRateType}
            placeholder="Select rate type"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="rate">{rateType === "percentage"? "Rate": "Amount"}</label>
          <InputWithIcon
            type="number"
            autoComplete=""
            placeholder="Enter the rate value"
            LeftIcon={rateType === "percentage"? FaPercent: FaMonero}
            value={formData.rate}
            onChange={(e) =>
              setFormData({ ...formData, rate: Number(e.target.value) })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone">Name</label>
          <InputWithIcon
            type="string"
            placeholder="Name of Service"
            LeftIcon={FaPen}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Description</label>
          <Textarea
            className="text-[1rem]"
            placeholder="Enter the description"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
          />
        </div>
        <div>
          <Button
            className="w-48"
            type="submit"
            disabled={isLoading}
            onClick={handleCreateServiceType}
          >
            {isLoading ? "Adding..." : "Add Service Type"}
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
