"use client";
import React from "react";
import Back from "@/components/ui/Back";
import MainWarapper from "@/components/ui/mainWarapper";
import SectionTitle from "@/components/ui/sectionTitle";
import { FaHandsWash, FaStar } from "react-icons/fa";
import { DatePicker } from "@/components/ui/datePicker";
import ServiceType from "@/components/core/Order/ServiceType";
import { FaDiamond, FaShirt, FaTruckFast } from "react-icons/fa6";
import Cloth from "@/components/core/Order/Cloth";
import SelectWithSearch from "@/components/ui/SelectWithSearch";
import { Button } from "@/components/ui/button";
import AddCloth from "@/components/core/Order/AddCloth";
import { Card } from "@/components/ui/card";

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
      <div className="flex w-full gap-[5%] lg:flex-col lg:gap-8">
        <form className="w-[60%] flex flex-col gap-4 lg:w-full">
          <SelectWithSearch />
          <div className="flex gap-4">
            <SelectWithSearch />
            <DatePicker />
          </div>
          <div className="flex gap-4 mt-4 lg:flex-col">
            <div className="flex w-[50%] flex-col gap-2 lg:w-full">
              <h1>Select Service Type</h1>
              <ServiceType
                options={[
                  { title: "Regular", Icon: FaStar },
                  { title: "Express", Icon: FaTruckFast },
                  { title: "Premium", Icon: FaDiamond },
                ]}
                active="Regular"
              />
            </div>
            <div className="flex w-[50%] flex-col gap-2 lg:w-full">
              <h1>Select Wash Type</h1>
              <ServiceType
                options={[
                  { title: "Wash", Icon: FaHandsWash },
                  { title: "Wash and Press and", Icon: FaShirt },
                ]}
                active="Wash"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 mt-4">
            <h1>Clothes</h1>
            <div className="flex gap-4 flex-wrap">
              <Cloth />
              <Cloth />
              <Cloth />
              <Cloth />
              <Cloth />
            </div>
            <div className="mt-4">
              <AddCloth />
            </div>
            
          </div>
        </form>
        <div className="w-[35%] lg:w-full">
          <SectionTitle>Order details</SectionTitle>
          <div className="flex mt-4 gap-x-2 gap-y-8 flex-wrap">
            {[1, 2, 3].map((item, index) => {
              return (
                <div className="flex flex-col font-medium items-center gap-2" key={index}>
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
      <div className="flex gap-2 mt-8">
              <Button
                className="min-w-[15rem] border-error text-error"
                variant={"outline"}
              >
                Cancel
              </Button>
              <Button className="min-w-[15rem]">Edit Order</Button>
            </div>
    </MainWarapper>
  );
}
