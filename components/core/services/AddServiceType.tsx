"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { InputWithIcon } from "@/components/ui/input";
import Select from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { FaMoneyBill } from "react-icons/fa";

export default function AddServiceType() {
  return (
    <div className="w-full flex flex-col gap-4">
      <Select options={[]} placeholder="select Icon" />

      <InputWithIcon LeftIcon={FaMoneyBill} placeholder="Service name" />
      <Textarea placeholder="Enter the description" />
      <Button className="w-full">Add service type</Button>
    </div>
  );
}
