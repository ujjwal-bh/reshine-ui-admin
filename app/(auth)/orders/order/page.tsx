"use client";
import { useGetAllAddressesQuery } from "@/app/_global-redux/services/address-api";
import { useGetAllClothPricingForServiceMutation, useGetAllServicesQuery } from "@/app/_global-redux/services/laundry-service-api";
import { useCreateOrderMutation } from "@/app/_global-redux/services/order-api";
import { useGetAllServiceTypesQuery } from "@/app/_global-redux/services/service-type-api";
import { useGetAllUsersQuery } from "@/app/_global-redux/services/user-api";
import AddCloth from "@/components/core/Order/AddCloth";
import Cloth from "@/components/core/Order/Cloth";
import Back from "@/components/ui/Back";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DatePicker } from "@/components/ui/datePicker";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { IAddress } from "@/interfaces/address.interface";
import { IClothServicePricing } from "@/interfaces/cloth-service-pricing.interface";
import { IUser } from "@/interfaces/login.interface";
import { ILaundryService, IServiceType } from "@/interfaces/services.interface";
import { useEffect, useState } from "react";
import { FaShirt } from "react-icons/fa6";


export interface ISelectedCloth {
  cloth: string,
  count: number
}
export default function AddOrder() {
  const [user, setUser] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [pickupDate, setPickupDate] = useState<Date>();
  const [serviceType, setServiceType] = useState("");
  const [washType, setWashType] = useState("");
  const [selectedClothes, setSelectedClothes] = useState<ISelectedCloth[]>([])
  const [allClothesData, SetAllClothes] = useState<IClothServicePricing[]>()


  const { data: allAddresses } = useGetAllAddressesQuery({
    limit: 1000,
    page: 1,
  });
  // this is ineffecient and needs to be changed as the users increases to more than 1000
  const { data: allUsers } = useGetAllUsersQuery({
    limit: 1000,
    page: 1,
    role: "user",
  });
  const { data: allServiceTypes } = useGetAllServiceTypesQuery({
    limit: 1000,
    page: 1,
  });

  const {data: allServices} = useGetAllServicesQuery({
    limit: 1000,
    page: 1,
  });
  const [getAllClothPricingForService, {data: getAllClothPricingData, isSuccess: getAllClothPricingSuccess}] = useGetAllClothPricingForServiceMutation()


const [createOrder, {isSuccess: createOrderSuccess, isError: createOrderError, isLoading: createOrderLoading}] = useCreateOrderMutation()

  const modifyAddressArray = (addresses: IAddress[]) => {
    return addresses.map((address) => {
      return {
        label: `${address.landmark}, ${address.address}, ${address.city}, ${address.state}, ${address.pincode}`,
        value: address.id,
      };
    });
  };

  const modifyUsersArray = (users: IUser[]) => {
    return users.map((usr) => {
      return { label: usr.name + " " + usr.phone, value: usr.id };
    });
  };

  const modifyServiceTypesArray = (srvs: IServiceType[] | ILaundryService[]) => {
    return srvs.map((srv) => {
      return { label: srv.name, value: srv.id };
    });
  };





  const getClothPricingData = async ()=> {
    const data = await getAllClothPricingForService(washType)
    SetAllClothes(data?.data?.results || [])

  }

  useEffect(()=> {
    getClothPricingData()
  }, [washType])




  const handleSubmitOrder = async (e: React.FormEvent) => {
    e.preventDefault()

    await createOrder({
      address: pickupAddress,
      pickupDate,
      user,
      serviceType,
      service: washType,
      clothes: selectedClothes
    })
  }


  return (
    <MainWarapper>
      <div className="flex items-center gap-8 justify-between pb-4 border-b-2 border-gray-100">
        <div className="flex items-center gap-4">
          <Back />
          <SectionTitle>Add Order</SectionTitle>
        </div>
      </div>
      <div className="flex w-full gap-[5%] lg:flex-col lg:gap-8">
        <form className="w-[60%] flex flex-col gap-4 lg:w-full" onSubmit={handleSubmitOrder}>
          <div>
            <label htmlFor="location">Pickup Location</label>
            <SelectWithSearch
              options={modifyAddressArray(allAddresses?.results || [])}
              setData={setPickupAddress}
              placeholder="Select pickup location"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-full">
              <label htmlFor="user">User</label>
              <SelectWithSearch
                options={modifyUsersArray(allUsers?.results || [])}
                setData={setUser}
                placeholder="select user"
              />
            </div>
            <div className="w-full">
              <label htmlFor="date">Select Pickup date</label>
              <DatePicker setDate={setPickupDate} date={pickupDate} />
            </div>
          </div>
          <div className="flex gap-4 mt-4 lg:flex-col">
            <div className="flex w-[50%] flex-col gap-2 lg:w-full">
              <h1>Select Service Type</h1>
              <SelectWithSearch
                options={modifyServiceTypesArray(allServiceTypes?.results || [])}
                setData={setServiceType}
                placeholder="select Service type"
              />
            </div>
            <div className="flex w-[50%] flex-col gap-2 lg:w-full">
              <h1>Select Wash Type</h1>
              <SelectWithSearch
                options={modifyServiceTypesArray(allServices?.results || [])}
                setData={setWashType}
                placeholder="select Wash type"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h1>Clothes</h1>
            <div className="flex gap-4 flex-wrap">
              {
                selectedClothes.map((singleCloth) => (
                  <Cloth key={singleCloth.cloth} cloth={singleCloth.cloth} count={singleCloth.count} selectedClothes={selectedClothes} setSelectedClothes={setSelectedClothes} />
                ))
              }
            
            </div>
            <div className="mt-4">
              <AddCloth allClothesData={allClothesData || []} clothes={selectedClothes} setClothes={setSelectedClothes}/>
            </div>
          </div>
        </form>
        <div className="w-[35%] lg:w-full">
          <SectionTitle>Order details</SectionTitle>
          <div className="flex mt-4 gap-x-2 gap-y-8 flex-wrap">
            {[1, 2, 3, 5, 4].map((item, index) => {
              return (
                <div
                  className="flex flex-col font-medium items-center gap-2"
                  key={index}
                >
                  <h1>x 3</h1>
                  <Card className="flex items-center justify-center p-4 gap-2 bg-background text-primary">
                    <div className="text-xl">
                      <FaShirt />
                    </div>
                    <h1>Tshirt</h1>
                  </Card>
                  <h1>Rs 25</h1>
                </div>
              );
            })}
          </div>
          <Card className="mt-8 border-0 bg-primaryTransparent text-gray-400">
            <div className="flex justify-between gap-2 px-4 py-4">
              <span>Subtotal</span>
              <span>Rs 234</span>
            </div>
            <div className="flex justify-between gap-2 px-4 pb-4">
              <span>taxes</span>
              <span>Rs 23.4</span>
            </div>
            <div className="flex justify-between gap-2 p-4 bg-primary rounded-b-md text-background text-lg">
              <span>Invoice total</span>
              <span>Rs 23.4</span>
            </div>
          </Card>
        </div>
      </div>
      <div className="flex gap-2 mt-8 flex-wrap">
        <Button
          className="min-w-[15rem] border-error text-error lg:w-full"
          variant={"outline"}
        >
          Cancel
        </Button>
        <Button className="min-w-[15rem] lg:w-full" type="submit" onClick={handleSubmitOrder}>Complete Order</Button>
      </div>
    </MainWarapper>
  );
}
