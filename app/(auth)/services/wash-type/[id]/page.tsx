"use client";
import React, { SyntheticEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useGetAllClothesQuery } from "@/app/_global-redux/services/clothes-api";
import {
  useCreateClothServicePricingMutation,
  useDeleteServiceMutation,
  useGetAllClothServicePricingQuery,
  useGetServiceQuery,
  useUpdateServiceMutation,
} from "@/app/_global-redux/services/laundry-service-api";
import { IClothes } from "@/interfaces/clothes.interface";

import toast from "react-hot-toast";
import Back from "@/components/ui/Back";
import { Textarea } from "@/components/ui/textarea";
import { InputWithIcon } from "@/components/ui/input";
import { FaMoneyBill, FaSearch } from "react-icons/fa";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { Button, ButtonWithPopup } from "@/components/ui/button";

import ClothServicePricingCard from "@/components/core/services/ClothServicePricingCard";

export default function EditWashTypePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [cloth, setCloth] = useState("");
  const [price, setPrice] = useState<number>(0);
  const [data, setData] = useState({
    name: "",
    description: "",
  });

  const { data: clothesData } = useGetAllClothesQuery({
    page: 1,
    limit: 1000,
  });
  const { data: serviceData, isSuccess: serviceSuccess } = useGetServiceQuery(
    params.id
  );
  const { data: clothServicePricingData } = useGetAllClothServicePricingQuery(
    params.id
  );
  const [
    createClothServicePricing,
    {
      isSuccess: createClothServicePricingSuccess,
      isError: createClothServicePricingError,
      isLoading: createClothServicePricingLoading,
    },
  ] = useCreateClothServicePricingMutation();

  const [
    updateService,
    {
      isError: updateServiceError,
      isSuccess: updateServiceSuccess,
      isLoading: updateServiceLoading,
    },
  ] = useUpdateServiceMutation();
  const [
    deleteService,
    { isError: deleteServiceError, isSuccess: deleteServiceSuccess },
  ] = useDeleteServiceMutation();

  const filterClothesToSelect = (data: IClothes | undefined) => {
    return data?.results.map((result) => {
      return {
        label: result.name,
        value: result.id,
      };
    });
  };

  const handleUpdateService = async (e: SyntheticEvent) => {
    e.preventDefault();
    await updateService({ id: params.id, body: data });
  };

  const handleDeleteService = async () => {
    await deleteService(params.id);
  };

  const handleCreateClothServicePricing = async () => {
    await createClothServicePricing({
      cloth,
      service: params.id,
      price,
    });
  };
  useEffect(() => {
    if (serviceSuccess) {
      const {name, description} = serviceData
      setData({
        name,
        description: description || "",
      });
    }
  }, [serviceSuccess, serviceData]);

  useEffect(() => {
    if (updateServiceError) {
      toast.error("Something went wrong.");
    }
    if (updateServiceSuccess) {
      toast.success("Operation successful.");
    }
  }, [updateServiceError, updateServiceSuccess]);

  useEffect(() => {
    if (deleteServiceError) {
      toast.error("Something went wrong.");
    }
    if (deleteServiceSuccess) {
      toast.success("Operation successful.");
      router.push("/services");
    }
  }, [deleteServiceError, deleteServiceSuccess, router]);

  useEffect(() => {
    if (createClothServicePricingError) {
      toast.error("Something went wrong.");
    }
    if (createClothServicePricingSuccess) {
      toast.success("Operation successful.");
    }
  }, [createClothServicePricingError, createClothServicePricingSuccess]);
  return (
    <MainWarapper>
      <div className="flex gap-4 justify-between items-center flex-wrap">
        <div className="flex items-center gap-4">
          <Back />
          <SectionTitle>Wash type detail</SectionTitle>
        </div>
        <ButtonWithPopup
          className="border border-error text-error rounded-md h-10 w-[12rem]"
          confirmClick={handleDeleteService}
        >
          Delete wash type
        </ButtonWithPopup>
      </div>

      <form className="flex flex-col gap-4">
        <div className="flex gap-8 lg:flex-col lg:gap-4">
          <div className="flex flex-col gap-4 w-[50%] lg:w-full">
            {/* <SelectWithSearch placeholder="Select Icon" /> */}
            <div>
              <label htmlFor="name">Wash type name</label>
              <InputWithIcon
                LeftIcon={FaMoneyBill}
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
              />
            </div>
            <div>
              <label htmlFor="description">Wash type description</label>
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
          onClick={handleUpdateService}
          disabled={updateServiceLoading}
        >
          {" "}
          Edit
        </Button>
      </form>
      <SectionTitle>Add clothes</SectionTitle>
      <div className="flex gap-4 lg:flex-col">
        <div className="w-[100%]">
          <SelectWithSearch
            options={filterClothesToSelect(clothesData)}
            placeholder="select cloth"
            setData={setCloth}
          />
        </div>
        <div className="w-[100%]">
          <InputWithIcon
            LeftIcon={FaMoneyBill}
            placeholder="Enter Price"
            className="w-full"
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
          />
        </div>
        <div className="w-[100%]">
          <Button
            size="sm"
            className="w-48"
            onClick={handleCreateClothServicePricing}
            disabled={createClothServicePricingLoading}
          >
            Add Cloth
          </Button>
        </div>
      </div>
      <div className="flex justify-between lg:flex-wrap">
        <SectionTitle>Clothes</SectionTitle>
        <div className="flex gap-2 lg:flex-wrap">
          <InputWithIcon
            RightIcon={FaSearch}
            placeholder="search.."
            className="min-w-[15rem]"
          />
          {/* <Filter /> */}
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        {clothServicePricingData?.results.map((item) => (
          <ClothServicePricingCard key={item.id} id={item.id}>
            <div className="flex gap-4">
              <span>{item.clothInfo.name}</span>
              <span>Rs {item.price}</span>
            </div>
          </ClothServicePricingCard>
        ))}
      </div>
    </MainWarapper>
  );
}
