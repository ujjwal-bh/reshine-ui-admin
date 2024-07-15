"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import Select from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaMoneyBill } from "react-icons/fa";
import { useCreateServiceMutation } from "@/app/_global-redux/services/laundry-service-api";
import toast from "react-hot-toast";

export default function AddWashType() {
  const [createService, { isSuccess, isError, isLoading }] =
    useCreateServiceMutation();
  const [data, setData] = useState({ name: "", description: "" });

  const handleSubmit = async () => {
    await createService(data);
  };

  useEffect(() => {
    if (isError) {
      toast.error("something went wrong");
      setData({ name: "", description: "" });
    }
    if (isSuccess) {
      setData({
        name: "",
        description: ""
      })
      toast.success("Operation successful");
    }
  }, [isError, isSuccess]);
  return (
    <div className="w-full flex flex-col gap-4">
      <Select options={[]} placeholder="select Icon" />

      <InputWithIcon
        LeftIcon={FaMoneyBill}
        placeholder="Wash type name"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <Textarea
        placeholder="Enter the description"
        value={data.description}
        onChange={(e) => setData({ ...data, description: e.target.value })}
      />
      <Button className="w-full" onClick={handleSubmit}>
        Add wash type
      </Button>
    </div>
  );
}
