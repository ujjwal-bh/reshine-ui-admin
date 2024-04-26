import React from "react";
import Back from "@/components/ui/Back";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { Select } from "@/components/ui/select";
import SelectWithSearch from "@/components/core/SelectWithSearch";


export default function EditOrder() {
  return (
    <MainWarapper>
      <div className="flex items-center gap-8 justify-between pb-4 border-b-2 border-gray-100">
        <div className="flex items-center gap-4">
          <Back />
          <SectionTitle>Edit Order</SectionTitle>
        </div>
        <h1 className="text-gray-400">Order ID: #12345</h1>
      </div>
      <div className="flex w-full gap-[10%]">
      <form className="w-[50%]">
        <Select/>
        <SelectWithSearch placeholder="Select Location" options={[{value: "location1", label: "location1"}, {value: "location2", label: "Location2"},{value: "ation", label: "ation"}]} value={"location2"}/>
      </form>
        <div className="w-[40%]">
            hello
        </div>
      </div>
    </MainWarapper>
  );
}
