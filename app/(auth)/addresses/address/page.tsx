"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { useCreateAddressMutation } from "@/app/_global-redux/services/address-api";

import { ApiError } from "@/interfaces/api-error.interface";
import { LocationType } from "@/interfaces/address.interface";

import toast from "react-hot-toast";
import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { FaMap, FaMoneyBill } from "react-icons/fa";
import { FaLocationPin, FaMapLocation } from "react-icons/fa6";
import locationJson from "@/lib/statesCities.json";

const INIT = {
  landmark: "",
  address: "",
  pincode: "",
  deliveryCharge: 0,
};

export default function AddressPage() {
  const router = useRouter();
  const location: LocationType = locationJson;
  const [formData, setFormData] = useState(INIT);

  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [createAddress, { isLoading, isError, isSuccess, error }] =
    useCreateAddressMutation();

  const handleCreateAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    await createAddress({ ...formData, state, city });
  };

  useEffect(() => {
    if (isError) {
      toast.error((error as ApiError).data.message);
    }
    if (isSuccess) {
      toast.success("Operation Successful");
    }
  }, [isError, isSuccess, error]);

  useEffect(() => {
    if (isSuccess) {
      router.push("/addresses");
    }
  }, [isSuccess, router]);

  const getAllStates = () => {
    return Object.keys(location).map((state) => {
      return { label: state, value: state };
    });
  };

  const getCity = () => {
    return (
      location[state]?.map((city: string) => {
        return { label: city, value: city };
      }) || []
    );
  };

  return (
    <MainWarapper>
      <div className="flex items-center gap-8">
        <Back />
        <SectionTitle>Add Address</SectionTitle>
      </div>
      <form
        className="w-[50%] flex flex-col gap-4 lg:w-full"
        onSubmit={handleCreateAddress}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="state">State</label>
          <SelectWithSearch
            placeholder="E.g Karnataka"
            options={getAllStates()}
            setData={setState}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city">City</label>
          <SelectWithSearch
            placeholder="E.g Bangalore"
            options={getCity()}
            setData={setCity}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="address">Address</label>
          <InputWithIcon
            type="text"
            placeholder="Detailed address"
            LeftIcon={FaMap}
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="landmark">Landmark</label>
          <InputWithIcon
            placeholder="Nearest landmark"
            LeftIcon={FaMapLocation}
            type="text"
            value={formData.landmark}
            onChange={(e) =>
              setFormData({ ...formData, landmark: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="pin">Pin code</label>
          <InputWithIcon
            type="text"
            placeholder="E.g 546790"
            LeftIcon={FaLocationPin}
            value={formData.pincode}
            onChange={(e) =>
              setFormData({ ...formData, pincode: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="deliveryCharge">Delivery Charge</label>
          <InputWithIcon
            type="number"
            placeholder="E.g 100"
            LeftIcon={FaMoneyBill}
            value={formData.deliveryCharge}
            onChange={(e) =>
              setFormData({
                ...formData,
                deliveryCharge: Number(e.target.value),
              })
            }
          />
        </div>

        <div>
          <Button
            className="w-48"
            type="submit"
            disabled={isLoading}
            onClick={handleCreateAddress}
          >
            {isLoading ? "Adding..." : "Add Address"}
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
