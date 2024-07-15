"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import Select from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaMoneyBill } from "react-icons/fa";
import { useCreateServiceTypeMutation } from "@/app/_global-redux/services/service-type-api";
import toast from "react-hot-toast";

export default function AddServiceType() {
  const [createServiceType, {isSuccess, isError, isLoading}] = useCreateServiceTypeMutation()
  const [data, setData] = useState({name: "", description: ""})

  const handleSubmit = async () => {
    await createServiceType(data);
  }

  useEffect(()=> {
    if(isError){
      toast.error("something went wrong");
      setData({name: "", description: ""})
    }
    if(isSuccess){
      toast.success("Operation successful")
    }
  }, [isError, isSuccess])
  return (
    <div className="w-full flex flex-col gap-4">
      <Select options={[]} placeholder="select Icon" />
      <InputWithIcon LeftIcon={FaMoneyBill} placeholder="Service name" value={data.name} onChange={e=> setData({...data, name: e.target.value})} />
      <Textarea placeholder="Enter the description" value={data.description} onChange={e=> setData({...data, description: e.target.value})}/>
      <Button className="w-full" onClick={handleSubmit}> Add service type</Button>
    </div>
  );
}
