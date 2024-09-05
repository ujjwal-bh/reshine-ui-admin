"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  useGetAddressQuery,
  useUpdateAddressMutation,
} from "@/app/_global-redux/services/address-api";

import { LocationType } from "@/interfaces/address.interface";
import { ApiError } from "@/interfaces/api-error.interface";

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

export default function EditAddressPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const location: LocationType = locationJson;

  const [formData, setFormData] = useState(INIT);

  const [state, setState] = useState("");
  const [city, setCity] = useState("");

  const [
    updateAddress,
    {
      isLoading: updateAddressLoading,
      isError: isUpdateAddressError,
      isSuccess: isUpdateAddressSuccess,
      error: updateAddressError,
    },
  ] = useUpdateAddressMutation();

  const { data: addressData, isSuccess: getAddressDataSuccess, refetch: refetchGetAddressData } =
    useGetAddressQuery(params.id);

  const handleUpdateAddress = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateAddress({ id: params.id, body: { ...formData, state, city } });
  };

  useEffect(() => {
    if (isUpdateAddressError) {
      toast.error((updateAddressError as ApiError).data.message);
    }
    if (isUpdateAddressSuccess) {
      toast.success("Operation Successful");
    }
  }, [isUpdateAddressError, isUpdateAddressSuccess, updateAddressError]);

  useEffect(() => {
    if (getAddressDataSuccess) {
      const { state, city, landmark, deliveryCharge, address, pincode } =
        addressData;
      setState(state);

      setCity(city);
      setFormData({
        landmark,
        deliveryCharge,
        pincode,
        address,
      });
    }
  }, [getAddressDataSuccess, updateAddressError, addressData]);

  useEffect(()=> {
    if(isUpdateAddressSuccess){
      router.push("/addresses")
    }
  },[isUpdateAddressSuccess, router])

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
        <SectionTitle>Update Address</SectionTitle>
      </div>
      <form
        className="w-[50%] flex flex-col gap-4 lg:w-full"
        onSubmit={handleUpdateAddress}
      >
        <div className="flex flex-col gap-2">
          <label htmlFor="state">State</label>
          <SelectWithSearch
            placeholder="E.g Karnataka"
            options={getAllStates()}
            setData={setState}
            data={{label: state, value: state}}
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="city">City</label>
          <SelectWithSearch
            placeholder="E.g Bangalore"
            options={getCity()}
            setData={setCity}
            data={{label: city, value: city}}
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
            disabled={updateAddressLoading}
            onClick={handleUpdateAddress}
          >
            {updateAddressLoading ? "Updating..." : "Update Address"}
          </Button>
        </div>
      </form>
    </MainWarapper>
  );
}
